module.exports = (app) => {
    const complaint = require('../controllers/complaint.controller.js');
    const event = require('../controllers/event.controller.js');
    const user = require('../controllers/user.controller.js');

    // Create a new complaint
    app.post('/complaint', complaint.create);

    // Retrieve all complaints
    app.get('/complaints', complaint.findAll);

    // Update a Complaint with id
    app.put('/editComplaint/:complaintId', complaint.update);

    // Delete a complaint with complaintId
    app.delete('/deleteComplaint/:complaintId', complaint.delete);

    //Create a new event for bulletin board
    app.post('/addEvent',event.create);

    // Retrieve all events
    app.get('/getEvents',event.findAll);

    // Delete a event
    app.delete('/deleteEvent/:eventId',event.delete);

    //User signup
    app.post('/signup',user.create);

    //User login
    app.get('/login',user.login);


    
}