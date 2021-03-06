// Generated by CoffeeScript 1.7.1
(function() {
  var add, multiply, process, substract;

  add = function(x, y) {
    return x + y;
  };

  substract = function(x, y) {
    return x - y;
  };

  multiply = function(x, y) {
    return x * y;
  };

  process = function(func, numbers, initial) {
    var result;
    result = func(initial, numbers.shift(0));
    if (numbers.length) {
      return process(func, numbers, result);
    } else {
      return result;
    }
  };

  console.log(process(add, [1, 2, 3, 4, 5], 0));

  console.log("------------------");

  console.log(process(substract, [1, 2, 3, 4, 5], 30));

  console.log("------------------");

  console.log(process(multiply, [1, 2, 3, 4, 5], 1));

}).call(this);
