const mongoose = require('mongoose');

const events = mongoose.Schema({
    name: String,
    description: String,
    date: String 
}, {
    timestamps: true
});

module.exports = mongoose.model('events', events);