//"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath C:\Users\Slawek\Desktop\auth-server\data\db
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Model definition
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

userSchema.pre('save', function(next) {
    const user = this;

    bcrypt.genSalt(10, function(error, salt){
        if(error) {
            next(error);
        }

        bcrypt.hash(user.password, salt, null, function(error, hash) {
            if(error) {
                next(error);
            }
            user.password = hash;
            next();
        })
    })
});

//Model creation
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;