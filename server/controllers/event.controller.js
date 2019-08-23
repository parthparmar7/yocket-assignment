const Event = require('../models/events.model.js');

exports.create = (req, res) => {

    const event = new Event({
        name: req.body.name, 
        description: req.body.description,
        date: req.body.date,
    });

    event.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Event."
        });
    });
};

exports.findAll = (req, res) => {
	Event.find()
    .then(event => {
        res.send(event);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving events."
        });
    });

};

exports.delete = (req, res) => {
	Event.findByIdAndRemove(req.params.eventId)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });
        }
        res.send({message: "event deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Could not delete event with id " + req.params.eventId
        });
    });

};