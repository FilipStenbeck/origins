var _ = require('lodash');

var daltons = [
  { 'dalton': 'Averell',  'age': 26 },
  { 'dalton': 'Joe',    'age': 40 },
  { 'dalton': 'William', 'age': 30 },
  { 'dalton': 'William', 'age': 32 }
];

var youngest = _.chain(daltons)
  .sortBy('age')
  .map(function(chr) {return chr.dalton + ' is ' + chr.age; })
  .first()
  .value();

console.log(youngest);
