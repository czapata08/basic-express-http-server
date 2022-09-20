const express = require("express");
const app = express();
const low = require("lowdb");
const fs = require("lowdb/adapters/FileSync");
const adapter = new fs("db.json");
const db = low(adapter);
const { faker } = require("@faker-js/faker");
const cors = require('cors')

//cors security
app.use(cors());

//init the data store
db.defaults({ users: [] }).write();

//serve static files from public directory which is public in this case
//--------
app.use(express.static('public'))


//data parser enabling to collect data and store
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

//return all users //route to view data
app.get("/data", function (req, res) {
  res.send(db.get("users").value());
});

//post route //collect data and store in database db.json
app.post("/test", function (req, res) {
  console.log(req.body.username, req.body.password);
  res.send(req.body.username + " " + req.body.password);
});

//add user route
app.post("/add", function (req, res) {
  var user = {
    'name'    : req.body.name,
    'dob'     : req.body.dob,
    'email'   : req.body.email,
    'username': req.body.username,
    'pswd'    : req.body.pswd,
    'phone'   : req.body.phone,
    'streetaddress': req.body.streetaddress,
    'citystatezip' : req.body.citystatezip,
    'latitude'     : req.body.latitude,
    'longitude'    : req.body.longitude,
    'avatar'       : faker.internet.avatar(),
  }; 
  db.get("users").push(user).write();
  console.log(db.get("users").value());
  res.send(db.get("users").value());
});

//start server
app.listen(3000, function () {
  console.log("Running On Port 3001");
});

