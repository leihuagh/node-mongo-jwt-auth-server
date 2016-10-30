const User = require('../models/user');

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' })
    }

    User.findOne({ email: email.toLowerCase() }, function(error, existingUser) {

        if(error) {
            return next(error);
        }

        if(existingUser) {
            return res.status(422).send({error: 'Email is in use'})
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(function(error) {
            if(error) {
                return next(error)
            }

            return res.json({ success: true, message: 'User with email ' + user.email + ' was successfully created.'})
        });

    })
};