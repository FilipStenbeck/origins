const _ = require ('lodash');

const groupFromEvent = (data) => data.map(event => event.league);

const onlySwedish = (data) => data.filter(name => name === 'Allsvenskan' || name === 'Superettan' || name === 'Division 1 Norra');

const unique = (data) => _.unique(data);

const sortByName = (data) => data.sort();

const reduce = (data) => _.reduce(data, (names, name) => names + ', ' + name);

const clean = (data) => data.replace(/,([^,]*)$/," &$1");

const noResult = (data) => "No result";

const beautify = (data) => (data && data !== '') ? clean(data) :  noResult();

/*
A naive (and very specific) implementation of compose just to show the principle
For the full implementation of see lodash _.compose
 ./src/demo/node_modules/lodash/internal/createFlow.js
*/
const compose = (sixth, fifth, forth, third, second, first) => {
  return (data)  => {
    return (
      sixth(
      fifth(
      forth(
      third(
      second(
      first(data))))))
    );
  }
}



module.exports = {
    all : _.compose(beautify, reduce, sortByName, unique, groupFromEvent),
    swedish : compose(beautify, reduce, sortByName, unique, onlySwedish, groupFromEvent),
    raw : groupFromEvent
}
