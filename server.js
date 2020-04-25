
const express = require("express");
const app = express();
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/dev.json')

app.get('/',  (req, res) => {
    // res.sendfile(__dirname + '/public/index.html');
    res.send({name:"saikrishna"})
})


// app.use(bodyParser.json()); // parse application/json
// app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
// app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
// app.use(bodyParser.json());
// const allowCrossDomain = function(req, response, next) {
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Credentials", "true");
//     response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//     response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     next();
// };
// app.use(allowCrossDomain);




const database = mongoose.connect('mongodb://'+config.db.mongo.host+'/'+config.db.mongo.db, function () {
    app.listen(5000, function () {
        console.log("database connected", database);
        console.log("Welcome to UserApp sai.. server started at 5000")
    })
});


