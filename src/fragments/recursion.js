var _ = require('lodash');

function adder(numbers, acc) {
  if (numbers.length === 0) {
    return acc;
  } else {
    return adder(_.tail(numbers), _.head(numbers) + acc);
  }
};

result = adder([1,2,3,4,5], 0);
console.log(result);
