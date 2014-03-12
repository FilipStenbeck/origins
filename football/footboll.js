var _ = require('lodash');
var mostPopular = require('./data/fotboll.json');


/*
* Printing sorted division names 
*/

function doingItImperative() {
	var onlyGroupArray = [], divisions ='';

	for (i = 0; i < mostPopular.length; i++) {
		var found = false;
		if (mostPopular[i].group == 'Allsvenskan' || mostPopular[i].group === 'Superettan' || mostPopular[i].group === 'Division 1 Norra') {
			for (j = 0; j < onlyGroupArray.length; j++) {
				if (onlyGroupArray[j] === mostPopular[i].group) {
					found = true;
					break;
				}
			}
			if (!found) {
				onlyGroupArray.push(mostPopular[i].group);
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

	var replace = function(names) {
		if (!names) return "";
		return names.replace(/,([^,]*)$/,' &$1');
	}

	var divisions = _.chain(mostPopular)
		.map(groupFromEvent)
		.filter(swedishDivisions)
		.uniq()
		.sortBy()
		.reduce(divisionNames)
		.value();

	console.log(replace(divisions));
}


console.log(' \n--------------------------------------------- \n')
doingItImperative();
doingItFunctionaly();
console.log(' \n--------------------------------------------- \n')