#Setup lo-dash and data
_ = require("lodash");
events = require("./data/fotboll.json");

#Declaring functions
groupFromEvent = (data) -> _.map data, (event) -> 	event.group

onlySwedish = (data) -> _.filter data, (name) -> name is 'Allsvenskan' or name is 'Superettan' or name is 'Division 1 Norra' 		

onlyOne = (data) -> _.unique data

sortByName = (data) -> data.sort()

fold = (data) -> _.reduce data, (names, name) -> names + ', ' + name  

clean = (data) -> if data? then data.replace(/,([^,]*)$/," &$1") else "No Result"

#Transforming data
result = clean(fold(sortByName(onlyOne(onlySwedish(groupFromEvent(events))))))

#Printing result	
console.log " \n--------------------------------------------- \n"
console.log result
console.log " \n--------------------------------------------- \n"
