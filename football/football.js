var _ = require('lodash');

/*
* Printing sorted division names using imperative style
*/

function doingItImperative() {
	var events = require('./data/fotboll.json'), onlyGroupArray = [], divisions ='';

	for (i = 0; i < events.length; i++) {
		var found = false;
		if (events[i].group == 'Allsvenskan' || events[i].group === 'Superettan' || events[i].group === 'Division 1 Norra') {
			for (j = 0; j < onlyGroupArray.length; j++) {
				if (onlyGroupArray[j] === events[i].group) {
					found = true;
					break;
				}
			}
			if (!found) {
				onlyGroupArray.push(events[i].group);
			}
		}
	}
	divisions = onlyGroupArray.sort().join(', ').replace(/,([^,]*)$/,' &$1');
	console.log(divisions)
}

/*
* Printing sorted division names using a functional style 
*/

function doingItFunctionaly() {
	var allEvents, clean, fold, groupFromEvent, onlyOne, onlySwedish, result, sortByName;

	//Declaring functions
	allEvents = function(data) {
    	return require(data);
  	};

	groupFromEvent = function(data) {
		return _.map(data, function(event) {
	  		return event.group;
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
	divisions = _.compose(clean, fold, sortByName, onlyOne, onlySwedish, groupFromEvent, allEvents);

	//Printing result 
	result = divisions("./data/fotboll.json");
	console.log(result)
}


console.log(' \n--------------------------------------------- \n')
doingItImperative();
doingItFunctionaly();
console.log(' \n--------------------------------------------- \n')