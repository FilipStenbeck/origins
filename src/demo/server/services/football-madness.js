'use strict';

module.exports = {

	data : require('../data/fotboll.json'),

	getMessage : function (sorted, asString, unique, onlySwedish) {
		let onlyGroupArray = [];
		let divisions = '';
		let found = false;
		let shouldAdd = false;

		for (let i = 0; i < this.data.length; i++) {
			shouldAdd = false;
			found = false;
			if (!onlySwedish || (this.data[i].league == 'Allsvenskan' ||
					this.data[i].league === 'Superettan' ||
					this.data[i].league === 'Division 1 Norra')
				) {
				shouldAdd = true;
			}
			if (shouldAdd) {
				for (let j = 0; j < onlyGroupArray.length; j++) {
					if (onlyGroupArray[j] === this.data[i].league) {
						found = true;
						break;
					}
				}
				if (!found || !unique) {
					onlyGroupArray.push(this.data[i].league);
				}
			}
		}
		if (sorted) {
			onlyGroupArray.sort();
		}
		if (asString) {
			return onlyGroupArray.join(', ').replace(/,([^,]*)$/,' &$1');
		} else {
			return onlyGroupArray;
		}
	}
};
