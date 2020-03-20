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

    const callRecursive = reverseIntMethodOne(utils.convertToString(number).substr(1));
    const result = `${callRecursive}` + `${utils.convertToString(number).charAt(0)}`;

    if (Number.isInteger(number))
        return number <= 0 ? -Math.abs(parseFloat(result)) : parseFloat(result);
    else {
        return number <= 0 ? -Math.abs(result) : result;
    }
}

function reverseIntMethodTwo(number) {
    if (!utils.checkNumberEmpty(number))
        return '';

    const numberArray = utils.convertToString(number).split('');

    const result = parseFloat(numberArray.reduce((finalString, newChar) => {
        return newChar + finalString
    }));

    return number <= 0 ? utils.convertNagativeInteger(result) : result;
}

function reverseIntMethodThree(number) {
    if (!utils.checkNumberEmpty(number))
        return '';

    const result = parseFloat(utils.convertToString(number).split("").reverse().join(""));
    return number <= 0 ? -Math.abs(result) : result;
}

function reverseIntMethodForth(number) {
    if (!utils.checkNumberEmpty(number))
        return '';

    var stringNumber = `${number}`;
    var arrayNumber = stringNumber.split("");

    let result = '';
    for (const objValue of arrayNumber) {
        result = objValue + result;
    }

    return number <= 0 ? -Math.abs(parseFloat(result)) : parseFloat(result);
}

module.exports = { reverseIntMethodOne, reverseIntMethodTwo, reverseIntMethodThree, reverseIntMethodForth };

// https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/