const nodemailer = require('nodemailer');
const randomString = require("randomstring");
const config = require("../config/environment");

const transporter = nodemailer.createTransport({
    host: config.nodemailer.from.emailSmtp,
    port: 465,
    secure: true, // use SSL
    auth: {
        user: config.nodemailer.from.emailName + '@' + config.nodemailer.from.emailDomain,
        pass: config.nodemailer.from.password
    }
});


exports.sendForgotPasswordEmail = function(user, domainReturnAddress) {
    var mailOptions = {};

    mailOptions.from = config.nodemailer.from.name + " " + config.nodemailer.from.emailName + config.nodemailer.from.emailDomain;
    mailOptions.to = user.email;
    mailOptions.subject = config.nodemailer.forgotPassword.subject;
    mailOptions.text = config.nodemailer.forgotPassword.txtContent(user, domainReturnAddress);
    mailOptions.html = config.nodemailer.forgotPassword.htmlContent(user, domainReturnAddress);

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log("email not sent, ", err);
        } else {
            console.log("email sent!")
        }
    })
};

exports.sendVerificationEmail = function(user, domainReturnAddress) {
    var mailOptions = {};

    mailOptions.from = config.nodemailer.from.name + " " + config.nodemailer.from.emailName + config.nodemailer.from.emailDomain;
    mailOptions.to = user.email;
    mailOptions.subject = config.nodemailer.emailVerification.subject;
    mailOptions.text = config.nodemailer.emailVerification.txtContent(user, domainReturnAddress);
    mailOptions.html = config.nodemailer.emailVerification.htmlContent(user, domainReturnAddress);

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log("email not sent, ", err);
        } else {
            console.log("email sent!")
        }
    })
};
