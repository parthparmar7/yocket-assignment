const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose');



mongoose.connect("mongodb+srv://parth:parth@cluster0-p5exz.mongodb.net/test?retryWrites=true&w=majority").then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


require('./routes.js')(app);
app.listen(process.env.PORT || 8081)