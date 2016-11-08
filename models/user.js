const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Number,
    emailActivationToken: String,
    active: Boolean
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

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) {
            return callback(err);
        }

        callback(null, isMatch);
    })
};

//Model creation
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;