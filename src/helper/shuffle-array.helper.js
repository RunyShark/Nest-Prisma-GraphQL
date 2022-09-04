"use strict";
exports.__esModule = true;
exports.shuffleArray = void 0;
var shuffleArray = function (array) {
    if (array === void 0) { array = []; }
    return array
        .map(function (a) { return ({ sort: Math.random(), value: a }); })
        .sort(function (a, b) { return a.sort - b.sort; })
        .map(function (a) { return a.value; });
};
exports.shuffleArray = shuffleArray;
