const mongoose = require('mongoose');

const complaints = mongoose.Schema({
    name: String,
    roomNumber: String,
    complaintType: String,
    description: String,
    resolved: {
    	type: Boolean,
    	default: false
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('complaints', complaints);