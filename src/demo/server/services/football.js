var _ = require ('lodash');

var groupFromEvent = (data) => data.map(event => event.league);

var onlySwedish = (data) => data.filter(name => name === 'Allsvenskan' || name === 'Superettan' || name === 'Division 1 Norra');

var unique = (data) => _.unique(data);

var sortByName = (data) => data.sort();

var reduce = (data) => _.reduce(data, (names, name) => names + ', ' + name);

var clean = (data) => data.replace(/,([^,]*)$/," &$1");

var noResult = (data) => "No result";

var beautify = (data) => (data && data !== '') ? clean(data) :  noResult();


module.exports = {
    swedish : _.compose(beautify, reduce, sortByName, unique, onlySwedish, groupFromEvent),
    all : _.compose(beautify, reduce, sortByName, unique, groupFromEvent),
    raw : groupFromEvent
}
