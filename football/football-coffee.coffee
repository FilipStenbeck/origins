#Setup lo-dash 
_ = require("lodash");

#Declaring functions
allEvents =  (data) ->  data

groupFromEvent = (data) -> _.map data, (event) -> event.league

onlySwedish = (data) -> _.filter data, (name) -> 
	name is 'Allsvenskan' or name is 'Superettan' or name is 'Division 1 Norra' 		

onlyOne = (data) -> _.unique data

sortByName = (data) -> data.sort()

fold = (data) -> _.reduce data, (names, name) -> names + ', ' + name  

clean = (data) -> if data? then data.replace(/,([^,]*)$/," &$1") else "No Result"

#Composing a function which transform the data
divisions = _.compose(clean, fold, sortByName, onlyOne, onlySwedish, groupFromEvent, allEvents)

#Printing result	
result = divisions(require ("./data/fotboll.json"));

console.log " \n--------------------------------------------- \n"
console.log result
console.log " \n--------------------------------------------- \n"
