module.exports = (app) => {
    const complaint = require('../controllers/complaint.controller.js');
    const event = require('../controllers/event.controller.js')

    // Create a new complaint
    app.post('/complaint', complaint.create);

    // Retrieve all complaints
    app.get('/complaints', complaint.findAll);

    // Update a Complaint with id
    app.put('/editComplaint/:complaintId', complaint.update);

    // Delete a complaint with complaintId
    app.delete('/deleteComplaint/:complaintId', complaint.delete);


    app.post('/addEvent',event.create);

    app.get('/getEvents',event.findAll);

    app.delete('/deleteEvent/:eventId',event.delete)


    
}