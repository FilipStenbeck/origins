const _ = require ('lodash');

const groupFromEvent = (data) => data.map(event => event.league);

const onlySwedish = (data) => data.filter(
    name => name === 'Allsvenskan' ||
    name === 'Superettan' ||
    name === 'Division 1 Norra');

const unique = (data) => _.unique(data);

const sortByName = (data) => data.sort();

const toString = (data) => _.reduce(data, (names, name) => names + ', ' + name);

const clean = (data) => data.replace(/,([^,]*)$/," &$1");

const noResult = (data) => "No result";

const hasContent = (data) => (data && data !== '');

const beautify = (data) => hasContent(data) ? clean(data) :  noResult();

module.exports = {
    all : _.compose(beautify, toString, sortByName, unique, groupFromEvent),
    swedish : _.compose(beautify, toString, sortByName, unique, onlySwedish, groupFromEvent),
    raw : groupFromEvent
}
