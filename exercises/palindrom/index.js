// -- Directions

// Given a string, return true if the string is a palindrome
// or else if it is not. Palindromes are strings that
// form the same word if it is reversed 
// order of characters

// --- Examples
//   reverse('appa') === true
//   reverse('hello') === false

// How to use regular expression.

const { reverseMethodOne } = require('../reversestring/index.js');
const utils = require('../utils/index.js');

function palindromMethodOne(str) {
    if (!utils.checkStringEmpty(str))
        return '';

    // Custom regular expression
    // first replace used to convert dash to slash
    // second replace used to remove dash, parenthesis, single quote, double quote and comma
    // third replace used to remove whitespace
    const finalString = str.replace(/\-/g, '/').replace(/\.|["'()–_/,]/gi, "").replace(/\s/gi, "").toLowerCase();
    const reversed = reverseMethodOne(finalString);
    return finalString === reversed.replace(/\-/g, '/').replace(/\.|["'()–_/,]/gi, "").replace(/\s/gi, "").toLowerCase();
}

function palindromMethodTwo(str) {
    if (!utils.checkStringEmpty(str))
        return '';

    // replace all the symbol by generic regular expression
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = reverseMethodOne(lowRegStr);
    return reverseStr === lowRegStr;
}

function palindromMethodThree(str) {
    if (!utils.checkStringEmpty(str))
        return '';

    // remove symbol by below regular expression
    const re = /[^A-Za-z0-9]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = reverseMethodOne(lowRegStr);
    return reverseStr === lowRegStr;
}

function palindromMethodForth(str) {
    if (!utils.checkStringEmpty(str))
        return '';

    const re = /[^A-Za-z0-9]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');

    const stringDevideLength = lowRegStr.length / 2;
    let finalValue = stringDevideLength;

    if (!Number.isInteger(stringDevideLength)) {
        // Math.ceil is used to take nearest integer value.
        finalValue = Math.ceil(stringDevideLength);
    }

    const leftPart = lowRegStr.substr(0, finalValue);
    const rightPart = !Number.isInteger(stringDevideLength) ? lowRegStr.substr(stringDevideLength).split("").reverse().join("")
        : lowRegStr.substr(finalValue).split("").reverse().join("");

    return leftPart === rightPart;
}


function palindromMethodFifth(str) {
    if (!utils.checkStringEmpty(str))
        return '';

    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    return lowRegStr.split('').every((char, i) => {
        return char === lowRegStr[lowRegStr.length - i - 1]
    });
}

module.exports = { palindromMethodOne, palindromMethodTwo, palindromMethodThree, palindromMethodForth, palindromMethodFifth };

// https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/reverseMethodOne

