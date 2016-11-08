const nodemailerService = require('../services/nodemailer');
const User = require('../models/user');
const async = require('async');
const crypto = require('crypto');

exports.forgotPassword = function (req, res, next){

    const email = req.body.email;

    if(!email) {
        return res.status(422).send({ error: 'You must provide an email', code: 'NO_EMAIL_PROVIDED'})
    }

    async.waterfall([
        function(done) {
            crypto.randomBytes(20, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            User.findOne({ email: email.toLowerCase() }, function(err, existingUser) {
                if(err) {
                    return next(err);
                }

                if(!existingUser) {
                    return res.status(422).send({error: 'User with this email does not exist', code: 'EMAIL_NOT_FOUND'})
                }

                existingUser.resetPasswordToken = token;
                existingUser.resetPasswordExpires = Date.now() + 3600000;
                existingUser.save(function(err) {
                    done(err, token, existingUser);
                });
            });
        },
        function(token, existingUser, done) {
            // sending
            nodemailerService.sendForgotPasswordEmail(existingUser, req.body.domain);
            return res.status(200).send({ msgId: 'EMAIL_WITH_RESET_TOKEN_SENT'});
        }
    ], function(err) {
        if (err) return next(err);
    });

};

exports.resetPassword = function(req, res, next) {
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if(err) {
            return next(err);
        }

        if (!user) {
            console.log("redirected to forgot password page")
            //return res.redirect('/forgotpassword');
        }

        console.log("redirected to reset password page")
        return res.send("password reseted")
    });
}