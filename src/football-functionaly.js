var _ = require('lodash'), data = require("./data/fotboll.json"),
	allEvents, clean, fold, groupFromEvent, onlyOne, onlySwedish, result, sortByName, result, leagues;

//Declaring functions
groupFromEvent = function(data) {
	return _.map(data, function(event) {
  		return event.league;
	});
};

onlySwedish = function(data) {
	return _.filter(data, function(name) {
  		return name === 'Allsvenskan' || name === 'Superettan' || name === 'Division 1 Norra';
	});
};

onlyOne = function(data) {
	return _.unique(data);
};

sortByName = function(data) {
	return data.sort();
};

fold = function(data) {
	return _.reduce(data, function(names, name) {
  		return names + ', ' + name;
	});
};

clean = function(data) {
	if (data != null) {
  		return data.replace(/,([^,]*)$/, " &$1");
	} else {
  		return "No Result";
	}
};

//Composing a function which transform the data
leagues  = _.compose(clean, fold, sortByName, onlyOne, onlySwedish, groupFromEvent);

//Get the result 
result = leagues(data);

console.log(' \n--------------------------------------------- \n')
console.log(result)
console.log(' \n--------------------------------------------- \n')
