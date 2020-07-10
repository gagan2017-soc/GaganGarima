/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
var User = require('./Models/User')
const authService = require("./Services/auth");

// var mongoose1 = require('mongoose');

const mongoose = require('./Utilities/mongooseConfig')();

const authRoute = require('./routes/auth');
const config = require("./Utilities/config").config;

app.use(express.static(path.join(__dirname, '/gagangarima/')));
pp.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", express.static(path.join(__dirname, "gagangarima")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
let port = process.env.PORT || 4000;
app.use(cors());

app.use((err, req, res, next) => {
  return res.send({
    "statusCode": 401,
    "statusMessage": "Something Went Wrong!"
  });
});
app.get("/auth/findmember/:email", function(req,resp){
  var email = req.params.email;
  console.log(email);

var response = authService.getCurrentUser(email);
console.log(response);
resp.send(response);
});//
app.use('/auth', authRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "gagangarima", "index.html"));
});



/**
 * Start Express server.
 */
server.listen(port, () => {
  console.log('app listening on port:' + port);
});
