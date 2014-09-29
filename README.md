Origins of functions 
=======

Code examples and a demo used in a presentation  called "on the origin of functions"

Demo info
=========

Small webapp to show what you can gain by adopting a more functional style when programming javascript.
Backend uses node.js and frontend is build on AngularJS

Installation
--------------
Install node.js 

```sh
install browserify
npm install -g browserify

Then install the projects npm dependencies
npm install  (in demo root folder)

Then install AngularJS with bower
bower install (in demo root)

```

Build command
--------------------------
browserify ./js/app.js -o ./build/browserify-bundle.js



Run
--------------------------
Type "node server.js" in project root

