var _ = require ('lodash');

var groupFromEvent = data => data.map(event => event.league);

var onlySwedish = data => data.filter(name => name === 'Allsvenskan' || name === 'Superettan' || name === 'Division 1 Norra');

var onlyOne = data => _.unique(data);

var sortByName = data => data.sort();

var fold = data => _.reduce(data, (names, name) => names + ', ' + name);

var clean = data => data.replace(/,([^,]*)$/," &$1");

var noResult = data => "No result";

var beautify = function(data) {
    if (data && data !== '') {
        return clean(data);
    } else {
        return noResult();
    }
};

module.exports = {
    swedish : _.compose(beautify, fold, sortByName, onlyOne, onlySwedish, groupFromEvent),
    all : _.compose(beautify, fold, sortByName, onlyOne, groupFromEvent),
    raw : groupFromEvent
}
