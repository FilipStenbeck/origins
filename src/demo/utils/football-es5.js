"use strict";

var _ = require("lodash");

var groupFromEvent = function (data) {
    return data.map(function (event) {
        return event.league;
    });
};

var onlySwedish = function (data) {
    return data.filter(function (name) {
        return name === "Allsvenskan" || name === "Superettan" || name === "Division 1 Norra";
    });
};

var onlyOne = function (data) {
    return _.unique(data);
};

var sortByName = function (data) {
    return data.sort();
};

var fold = function (data) {
    return _.reduce(data, function (names, name) {
        return names + ", " + name;
    });
};

var clean = function (data) {
    return data.replace(/,([^,]*)$/, " &$1");
};

var noResult = function (data) {
    return "No result";
};

var beautify = function (data) {
    if (data && data !== "") {
        return clean(data);
    } else {
        return noResult();
    }
};

module.exports = {
    swedish: _.compose(beautify, fold, sortByName, onlyOne, onlySwedish, groupFromEvent),
    all: _.compose(beautify, fold, sortByName, onlyOne, groupFromEvent),
    raw: groupFromEvent
};