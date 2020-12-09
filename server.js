const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/canvas-clone',
  {useNewUrlParser: true, useUnifiedTopology: true});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

require("./controllers/courses-controller")(app)
require("./controllers/modules-controller")(app)

app.listen(4000)
