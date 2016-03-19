const express = require("express");
const fs = require('fs');
const functional = require("./server/services/football.js");
const imperative = require("./server/services/football-madness");

const data = require('./server/data/fotboll.json');
const counter = require('./server/data/counter.json');
const COUNTER_FILE = './server/data/counter.json';
 const app = express();
 const port = 9000;


const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

const counterLogic = function (counterObj) {
  if (!counterObj) {
    counterObj = { 'hits': 0 }
  }
  return Object.assign(counterObj, {hits: counterObj.hits +1});
}

app.use(allowCrossDomain);

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

 app.get("/api/counter", function(req, res) {

	fs.writeFile(COUNTER_FILE, JSON.stringify(counterLogic(counter), null, 4), function(err) {
    	if(err) {
      		res.send("666");
    	} else {
    		res.send(JSON.stringify(counter.hits));
    	}
	});
 });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]);
 });

 app.listen(port, function() {
   console.log("Listening on " + port);
 });
