var Authentication = require('../controllers/authentication');

module.exports = function(app) {

    app.all('/', function(req, res, next){
        res.send("Auth-server is alive :). Send your credentials to the '/token' endpoint");
    });

    app.post('/token', function(){});

    app.get('/logout', function(){})

    app.post('/signup', Authentication.signup);

    app.post('/forgotpassword', function(){});

    app.get('/verificationemail', function(){})

};