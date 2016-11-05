var app = require('./config/express')();
var config = require('./config/environment');
var routes = require('./config/routes');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

routes(app);
mongoose.connect(config[config.env].db);

app.listen(config[config.env].port);

console.log("app is running");
console.log('listening on port ' + config[config.env].port);

