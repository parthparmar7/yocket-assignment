const Complaint = require('../models/complaint.model.js');

// Create and Save a new complaint
exports.create = (req, res) => {
	 /*if(!req.body.description) {
        return res.status(400).send({
            message: "Complaint can not be empty"
        });
    }*/

    // Create a Complaint
    const complaint = new Complaint({
        name: req.body.name, 
        roomNumber: req.body.roomNumber,
        complaintType: req.body.type,
        description: req.body.description,
    });

    // Save Complaint in the database
    complaint.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Complaint."
        });
    });
};

// Retrieve and return all complaints from the database.
exports.findAll = (req, res) => {
	Complaint.find()
    .then(complaints => {
        res.send(complaints);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving complaints."
        });
    });

};


// Update a complaint identified by the complaintId in the request
exports.update = (req, res) => {
	if(!req.body.description) {
        return res.status(400).send({
            message: "complaint content can not be empty"
        });
    }

    // Find complaint and update it with the request body
    Complaint.findByIdAndUpdate(req.params.complaintId, {
        /*name: req.body.name, 
        roomNumber: req.body.roomNumber,
        complaintType: req.body.type,
        description: req.body.description,*/
        resolved: req.body.resolved
    }, {new: true})
    .then(complaint => {
        if(!complaint) {
            return res.status(404).send({
                message: "complaint not found with id " + req.params.complaintId
            });
        }
        res.send(complaint);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "complaint not found with id " + req.params.complaintId
            });                
        }
        return res.status(500).send({
            message: "Error updating complaint with id " + req.params.complaintId
        });
    });
};

// Delete a complaint with the specified complaintId in the request
exports.delete = (req, res) => {
	Complaint.findByIdAndRemove(req.params.complaintId)
    .then(complaint => {
        if(!complaint) {
            return res.status(404).send({
                message: "complaint not found with id " + req.params.complaintId
            });
        }
        res.send({message: "complaint deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "complaint not found with id " + req.params.complaintId
            });                
        }
        return res.status(500).send({
            message: "Could not delete complaint with id " + req.params.complaintId
        });
    });

};