#Setup lo-dash 
_ = require("lodash");

map = (data) -> _.map data, (value) -> value + 1

filter = (data) -> _.filter data, (value) -> value > 2 		

reduce = (data) -> _.reduce data, (value, memo) -> value + memo

mapFilterReducePrint = _.compose(console.log, reduce, filter, map)

mapFilterReducePrint([1, 2, 3, 4])

