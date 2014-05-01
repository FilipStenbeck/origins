var _ = require('lodash');

var app = {
	data : require('./data/fotboll.json'),
};

function doingItImperative() {
	var onlyGroupArray = [], divisions ='';
	for (i = 0; i < app.data.length; i++) {
		var found = false;
		if (app.data[i].league == 'Allsvenskan' || 
				app.data[i].league === 'Superettan' || 
				app.data[i].league === 'Division 1 Norra') {
			for (j = 0; j < onlyGroupArray.length; j++) {
				if (onlyGroupArray[j] === app.data[i].league) {
					found = true;
					break;
				}
			}
			if (!found) {
				onlyGroupArray.push(app.data[i].league);
			}
		}
	}
	return onlyGroupArray.sort().join(', ').replace(/,([^,]*)$/,' &$1');
}

console.log(' \n--------------------------------------------- \n')
console.log (doingItImperative());
console.log(' \n--------------------------------------------- \n')
