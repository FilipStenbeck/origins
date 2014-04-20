// Generated by CoffeeScript 1.7.1
(function() {
  var allEvents, clean, divisions, fold, groupFromEvent, onlyOne, onlySwedish, result, sortByName, _;

  _ = require("lodash");

  allEvents = function(data) {
    return data;
  };

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

  divisions = _.compose(clean, fold, sortByName, onlyOne, onlySwedish, groupFromEvent, allEvents);

  result = divisions(require("./data/fotboll.json"));

  console.log(" \n--------------------------------------------- \n");

  console.log(result);

  console.log(" \n--------------------------------------------- \n");

}).call(this);