var _ = require('lodash');

var app = {
	data : require('./data/fotboll.json'),
	result : []
};
 
/*
* Getting sorted division names using imperative style
*/

function doingItImperative(sorted, asString, unique, onlySwedish) {
	var onlyGroupArray = [], divisions ='', found, shouldAdd;
	for (i = 0; i < app.data.length; i++) {
		shouldAdd = false;
		found = false;
		if (!onlySwedish || (app.data[i].league == 'Allsvenskan' || app.data[i].league === 'Superettan' || app.data[i].league === 'Division 1 Norra')) {
			shouldAdd = true;
		}
		if (shouldAdd) {
			for (j = 0; j < onlyGroupArray.length; j++) {
				if (onlyGroupArray[j] === app.data[i].league) {
					found = true;
					break;
				}
			}
			if (!found || !unique) {
				onlyGroupArray.push(app.data[i].league);
			}
		}
	}
	if (sorted) {
		onlyGroupArray.sort();
	}
	if (asString) {
		app.result = onlyGroupArray.join(', ').replace(/,([^,]*)$/,' &$1');
	} else {
		app.result = onlyGroupArray;
	}
}

console.log(' \n--------------------------------------------- \n')
doingItImperative(true, true, true, false);
console.log (app.result);
console.log(' \n--------------------------------------------- \n')