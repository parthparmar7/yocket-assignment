var mongoose = require('mongoose');

const users = mongoose.schema({
  username: {
        type: String,
        unique: true,
        required: true
    },
  password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', users);