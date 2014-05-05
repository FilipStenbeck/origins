var app = { 
	data : require('./data/fotboll.json'),
	getMessage : function () {
		var found, onlyGroupArray = [], divisions = '';
		for (i = 0; i < app.data.length; i++) {
			found = false;
			if (this.data[i].league == 'Allsvenskan' || 
				this.data[i].league === 'Superettan' || 
				this.data[i].league === 'Division 1 Norra') {
				for (j = 0; j < onlyGroupArray.length; j++) {
					if (onlyGroupArray[j] === this.data[i].league) {
						found = true;
						break;
					}
				}
				if (!found) {
					onlyGroupArray.push(this.data[i].league);
				}
			}
		}
		return onlyGroupArray.sort().join(', ').replace(/,([^,]*)$/,' &$1');		
	}
}; 


console.log(app.getMessage());

