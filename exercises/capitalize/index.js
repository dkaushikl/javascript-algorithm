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

function capitalizeThree(string) {
    if (!utils.checkStringEmpty(string)) {
        return '';
    }

    const arrayString = utils.convertToArray(string, ' ');

    const result = arrayString.reduce((finalString, newString) => {
        return `${finalString ? `${finalString} ` : ''}${newString.charAt(0).toUpperCase() + newString.slice(1)}`;
    }, '');

    return result;
}

function capitalizeForth(string) {
    if (!utils.checkStringEmpty(string)) {
        return '';
    }

    const arrayString = utils.convertToArray(string, ' ');
    let finalString = '';

    for (let index = 0; index < arrayString.length; index++) {
        finalString += `${finalString ? ' ' : ''}${arrayString[index].charAt(0).toUpperCase() + arrayString[index].slice(1)}`;
    }

    return finalString;
}

function capitalizeFifth(string) {
    if (!utils.checkStringEmpty(string)) {
        return '';
    }

    const stringArray = string.split(' ');
    const result = `${string.charAt(0).toUpperCase()}${stringArray[0].slice(1)}`;
    const cutString = stringArray.splice(1).join(' ');
    return `${result}${cutString ? ' ' : ''}${capitalizeFifth(cutString)}`;
}

function capitalizeSixth(string) {
    if (!utils.checkStringEmpty(string)) {
        return '';
    }

    let finalResult = string[0].toUpperCase();

    for (let index = 1; index < string.length; index++) {
        if (string[index - 1] === ' ') {
            finalResult += string[index].toUpperCase();
        } else {
            finalResult += string[index];
        }
    }

    return finalResult;
}

module.exports = { capitalizeOne, capitalizeTwo, capitalizeThree, capitalizeForth, capitalizeFifth, capitalizeSixth };