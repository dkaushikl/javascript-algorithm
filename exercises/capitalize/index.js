// -- Directions

// Write a function that accept a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('hello') --> 'Hello'
//   capitalize('a lazy fox') --> 'A Lazy Fox'


const utils = require('../utils/index.js');

function capitalizeOne(string) {
    if (!utils.checkStringEmpty(string)) {
        return '';
    }

    const arrayString = utils.convertToArray(string, ' ');
    let finalString = ''; let index = 0;

    while (index < arrayString.length) {
        finalString += `${finalString ? ' ' : ''}${arrayString[index].charAt(0).toUpperCase() + arrayString[index].slice(1)}`;
        index++;
    }

    return finalString;
}

function capitalizeTwo(string) {
    if (!utils.checkStringEmpty(string)) {
        return '';
    }

    const arrayString = utils.convertToArray(string, ' ');
    let finalString = '';

    for (const element of arrayString) {
        finalString += `${finalString ? ' ' : ''}${element.charAt(0).toUpperCase() + element.slice(1)}`;
    }

    return finalString;
}

module.exports = { capitalizeOne, capitalizeTwo, capitalizeThree, capitalizeForth, capitalizeFifth, capitalizeSixth };
