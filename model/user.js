var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    pass: String,
    conpass: String,

});

module.exports = mongoose.model('User', userSchema);