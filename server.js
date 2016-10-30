var app = require('./config/express')();
var routes = require('./config/routes');
var environment = require('./config/environment');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

routes(app);
mongoose.connect(environment.development.db);

app.listen(environment.development.port);

console.log("app is running");
console.log('listening on port ' + environment.development.port);

