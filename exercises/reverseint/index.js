// -- Directions

// Given a integer, return an integer that is the reverse
// ordering of numbers

// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const utils = require('../utils/index');

function reverseIntMethodOne(number) {
    if (!utils.checkNumberEmpty(number))
        return '';

    if (number > 0)
        return parseInt(reverseIntMethodOne(utils.convertToString(number).substr(1)) + utils.convertToString(number).charAt(0));

    return -Math.abs(parseInt(reverseIntMethodOne(utils.convertToString(number).substr(1)) + utils.convertToString(number).charAt(0)));
}

module.exports = { reverseIntMethodOne };