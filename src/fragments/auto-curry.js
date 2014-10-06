var _ = require('lodash');

var autoCurriedAdder = _.curry(function(a, b) {
  return a + b;
});

console.log(autoCurriedAdder(10, 2)); //No curring 

var adder10 = autoCurriedAdder(10); //Curried functions stored as var
console.log(adder10(2)); 

console.log(autoCurriedAdder(10)(2)); //Curried function called directly