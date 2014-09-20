#Setup lo-dash 
_ = require 'lodash'

#Declaring functions
groupFromEvent = (data) -> _.map data, (event) -> event.league

onlySwedish = (data) -> _.filter data, (name) -> 
	name is 'Allsvenskan' or name is 'Superettan' or name is 'Division 1 Norra' 		

onlyOne = (data) -> _.unique data

sortByName = (data) -> data.sort()

fold = (data) -> _.reduce data, (names, name) -> names + ', ' + name  

clean = (data) -> if data? then data.replace(/,([^,]*)$/," &$1") else "No Result"

#Exposing compositions a functions which transforms the data
module.exports = 
	swedish : _.compose(clean, fold, sortByName, onlyOne, onlySwedish, groupFromEvent)
	all : _.compose(clean, fold, sortByName, onlyOne, groupFromEvent)
	raw : _.compose(groupFromEvent)



