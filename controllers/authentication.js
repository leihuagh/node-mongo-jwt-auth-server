const User = require('../models/user');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const config = require('../config/environment');

function tokenForUser(user) {
    const timestamp = new Date().getTime();

    // sign with RSA SHA256
    return jwt.sign({ sub: user.id }, config[config.env].privateKey, { algorithm: 'RS256'});
}

exports.signin = function(req, res, next) {
    res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' })
    }

    User.findOne({ email: email.toLowerCase() }, function(err, existingUser) {

        if(err) {
            return next(err);
        }

        if(existingUser) {
            return res.status(422).send({error: 'Email is in use'})
        }

        const user = new User({
            email: email,
            password: password,
            active: false
        });

        user.save(function(error) {
            if(error) {
                return next(error)
            }

            

            return res.json({ token: tokenForUser(user) })
        });

    })
};