// Require the Express Module
const express = require('express');

// Create an Express App
var app = express();

// var session = require('express-session');
// app.use(session({secret: 'codingdojorocks'}));

var session = require('express-session');
var sessionStore = new session.MemoryStore;
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: true,
    secret: 'secret'
}));

// Flash
var flash = require('express-flash');
app.use(flash());

// req.session.name = req.body.name;
// console.log(req.session.name);

// Require dateformat
var dateFormat = require('dateformat');

// Require mongoose
var mongoose = require('mongoose');

// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:4200");
    next();
})

// var flash = require('flash-express');
// app.use(express.cookie-parser)
// app.use(flash);

// Require path
var path = require('path');

// Setting our Static Folder Directory
// app.use(express.static(path.join(__dirname, './client/static')));
app.use(express.static(path.join(__dirname, './public/dist')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})