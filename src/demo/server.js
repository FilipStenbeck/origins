 var express = require("express");
 var functional = require("./utils/football-coffee");
 var imperative = require("./utils/football-madness");
 
 var data = require('./data/fotboll.json');
 var app = express();
 var port = 9000;
 
 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('index.html')
 });

/* serves the api */
 
 app.get("/api/leagues/se", function(req, res) {
   res.send(functional.swedish(data));
 });

 app.get("/api/leagues/all", function(req, res) {
   res.send(functional.all(data));
 });

 app.get("/api/leagues/raw", function(req, res) {
 	res.send(functional.raw(data));
 });

 app.get("/api/imperative", function(req, res) {
    res.send(imperative.getMessage(true,true,true,true));
 });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]); 
 });
 
 app.listen(port, function() {
   console.log("Listening on " + port);
 });