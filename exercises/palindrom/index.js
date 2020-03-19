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
const { checkStringEmpty } = require('../utils/index.js');

function palindromMethodOne(str) {
    if (!checkStringEmpty(str))
        return '';

    // Custom regular expression
    const finalString = str.replace(/\-/g, '/').replace(/\.|["'()–_/,]/gi, "").replace(/\s/gi, "").toLowerCase();
    const reversed = reverseMethodOne(finalString);
    return finalString === reversed.replace(/\-/g, '/').replace(/\.|["'()–_/,]/gi, "").replace(/\s/gi, "").toLowerCase();
}

function palindromMethodTwo(str) {
    if (!checkStringEmpty(str))
        return '';

    // replace all the symbol by generic regular expression
    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = reverseMethodOne(lowRegStr);
    return reverseStr === lowRegStr;
}

function palindromMethodThree(str) {
    if (!checkStringEmpty(str))
        return '';

    // remove symbol by below regular expression
    const re = /[^A-Za-z0-9]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    const reverseStr = reverseMethodOne(lowRegStr);
    return reverseStr === lowRegStr;
}

function palindromMethodForth(str) {
    if (!checkStringEmpty(str))
        return '';

    const re = /[^A-Za-z0-9]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');

    const stringDevideLength = lowRegStr.length / 2;
    let finalValue = stringDevideLength;
    if (!Number.isInteger(stringDevideLength)) {
        finalValue = Math.ceil(stringDevideLength);
    }

    const leftPart = lowRegStr.substr(0, finalValue);
    const rightPart = !Number.isInteger(stringDevideLength) ? lowRegStr.substr(stringDevideLength).split("").reverse().join("")
        : lowRegStr.substr(finalValue).split("").reverse().join("");

    return leftPart === rightPart;
}


function palindromMethodFifth(str) {
    if (!checkStringEmpty(str))
        return '';

    const re = /[\W_]/g;
    const lowRegStr = str.toLowerCase().replace(re, '');
    return lowRegStr.split('').every((char, i) => {
        return char === lowRegStr[lowRegStr.length - i - 1]
    });
}

module.exports = { palindromMethodOne, palindromMethodTwo, palindromMethodThree, palindromMethodForth, palindromMethodFifth };

// https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/reverseMethodOne

