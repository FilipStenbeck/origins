var _ = require('lodash');

var conanTheAdder = function (x, y) {
	return x + y;
};
var schwarzenegger = function () {
  return _.reduce(arguments, conanTheAdder);
};

var result = schwarzenegger(1,2,3,3,3);
console.log(result);  //12
