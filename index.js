
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const config = require('./config/dev.json');
require('./services/passport')
require('./routes/authRoutes')(app);

app.get('/',  (req, res) => {
    // res.sendfile(__dirname + '/public/index.html');
    res.send({name:"saikrishna"})
});




const  PORT = process.env.PORT || 5000;
const database = mongoose.connect('mongodb://'+config.db.mongo.host+'/'+config.db.mongo.db, function () {
    app.listen(PORT, function () {
        console.log("database connected", database);
        console.log("Welcome to mern sai.. server started at 5000")
    })
});


