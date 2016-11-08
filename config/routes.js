const Authentication = require('../controllers/authentication');
const AccountRecovery = require('../controllers/accountRecovery');
const AccountVerification = require('../controllers/accountVerification');

const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = function(app) {

    app.get('/', requireAuth, function(req, res, next){
        res.send({ message: "success" });
    });

    app.post('/signin', requireSignIn, Authentication.signin);

    app.post('/signup', Authentication.signup);

    //routes to be used in the future if needed
    app.post('/token', function(){});
    app.get('/logout', function(){});

    app.post('/forgotpassword', AccountRecovery.forgotPassword);
    app.get('/reset/:token', AccountRecovery.resetPassword);

    app.get('/emailverification/:token', AccountVerification.verifyEmail)


};