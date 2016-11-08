const User = require('../models/user');



exports.verifyEmail = function(req, res, next) {
    const email = req.body.email;

    User.findOne({ emailActivationToken: req.params.token, active: { $eq: false }}, function(err, user) {
        if(err) {
            return next(err);
        }

        if (!user) {
            console.log("redirected to home page")
            return res.send("email not verified");
        }

        console.log("redirected admin panel (logged in)")
        return res.send("email verified");
    });
}