const User = require('../models/users.model.js');

exports.create = (req, res) => {

    const user = new User({
        username: req.body.username, 
        password: req.body.password,
    });

    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

exports.login = (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.send("Error");
    } else if(req.body.username.length > 40 || req.body.password.length > 40){
          res.send("Error");
    } else if (req.body.username) {
          req.body.username = req.body.username.toLowerCase();
          req.body.password = req.body.password;
       
    }
};