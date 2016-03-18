 var express = require("express");
 var fs = require('fs');
 var functional = require("./server/services/football.js");
 var imperative = require("./server/services/football-madness");

 var data = require('./server/data/fotboll.json');
 var counter = require('./server/data/counter.json');
 var app = express();
 var port = 9000;


var allowCrossDomain = function(req, res, next) {
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

    var outputFilename = './server/data/counter.json';
    counter.hits = counter.hits + 1;
	fs.writeFile(outputFilename, JSON.stringify(counter, null, 4), function(err) {
    	if(err) {
      		console.log(err);
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
