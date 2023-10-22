//Require express
const express = require("express");

//app object
const app = express();

//main page
app.get("/", function (req, res) {
  res.send("Welcome to my first Node.js web site.");
});

//contact page
app.get("/contact", function (req, res) {
  res.send("WELCOME TO THE CONTACT PAGE");
});

//bio page
app.get("/bio", function (req, res) {
  res.send("WELCOME TO THE BIO PAGE  ");
});
let port = process.env.port

if(port == null || port ===""){
  port = 8002
}

app.listen(port);
