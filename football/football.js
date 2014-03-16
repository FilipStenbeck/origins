var _ = require('lodash');
var events = require('./data/fotboll.json');


/*
* Printing sorted division names 
*/

function doingItImperative() {
	var onlyGroupArray = [], divisions ='';

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
* Printing sorted division names 
*/

function doingItFunctionaly() {

	var groupFromEvent = function(event) {
		return event.group;
	};

	var swedishDivisions = function (name) {
		return name == 'Allsvenskan' || name === 'Superettan' || name === 'Division 1 Norra';
	};

	var divisionNames = function (names, name) {
		return names + ', ' + name;
	}

	var clean = function(names) {
		return (names) ? names.replace(/,([^,]*)$/,' &$1')  : "No results"
	}

	var divisions = _.chain(events)
		.map(groupFromEvent)
		.filter(swedishDivisions)
		.uniq()
		.sortBy()
		.reduce(divisionNames)
		.value();	

	console.log(clean(divisions));
}


console.log(' \n--------------------------------------------- \n')
doingItImperative();
doingItFunctionaly();
console.log(' \n--------------------------------------------- \n')