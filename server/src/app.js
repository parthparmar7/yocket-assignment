const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose');
var passport = require('passport');
var expressSession = require('express-session');



mongoose.connect("mongodb+srv://parth:parth@cluster0-p5exz.mongodb.net/test?retryWrites=true&w=majority").then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );

const app = express()

app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

var flash = require('connect-flash');
app.use(flash());

app.set('view engine', 'html');

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

var initPassport = require('./passport/init');
initPassport(passport);

var routes = require('./passport/route')(passport);
app.use('/', routes);


require('./routes.js')(app);
app.listen(process.env.PORT || 8081)