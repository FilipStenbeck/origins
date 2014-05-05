var LeaugeParser = function (json) {
	var 	_= require('lodash'), 
			allEvents, 
			clean, 
			fold, 
			groupFromEvent, 
			onlyOne, 
			onlySwedish, 
			result, 
			sortByName, 
			result, 
			leagues;

	/*******************************************************
	*
	* Private functions, hidden but kept in scope by closure
	*
	*********************************************************/

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

	/*******************************************************
	*
	* Public API
	*
	*********************************************************/
	return {
		getUnsortedArray : function  (json) {
			return _.compose(groupFromEvent)(json);	
		},
		getSortedArray : function  (json) {
			return _.compose(sortByName,groupFromEvent)(json);	
		},
		getLeagueMessage : function (json) {
			return _.compose(clean, fold, sortByName, onlyOne, onlySwedish, groupFromEvent)(json);
		},
		stringify : function (array) {
			return _.compose(clean, fold)(array);
		}
	}
} 



//In some other part of the application
var json = require("./data/fotboll.json");
var parser = new LeaugeParser();

//Leauges as unsorted array
console.log('------------- Unsorted array ------------------------------\n');
console.log(parser.getUnsortedArray(json));

//Leauges as sorted array
console.log('\n------------- Sorted array ------------------------------\n');
console.log(parser.getSortedArray(json));

//Message clean sorted only swedish.. 
console.log('\n------------ Final message ------------------------------\n');
console.log(parser.getLeagueMessage(json));

//Transform an array of strings to a nice message
console.log('\n------------ Transform an array of Strings ---------------\n');
console.log(parser.stringify(['Common Lisp', 'Haskell', 'Erlang', 'JavaScript']));

//The module public API
console.log('\n------------ The Leauge parser module public API ---------\n');
console.log(parser);



