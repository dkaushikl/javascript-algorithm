// -- Directions

// Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Differance between For of and For in.
// Javascipt recursion function

const { checkStringEmpty } = require('../utils/index.js');

function reverseMethodOne(str) {
    if (!checkStringEmpty(str))
        return '';

    return str.split('').reverse().join('');
}

function reverseMethodSecond(str) {
    if (!checkStringEmpty(str))
        return '';

    let finalString = '', stringCount = str.length - 1;

    for (let i = stringCount; i >= 0; i--) {
        finalString += str.charAt(i);
    }

    return finalString;
}

function reverseMethodThird(str) {
    if (!checkStringEmpty(str))
        return '';

    let finalString = '', stringCount = str.length - 1;

    while (stringCount >= 0) {
        finalString += str.charAt(stringCount);
        stringCount--;
    }

    return finalString;
}

function reverseMethodForth(str) {
    if (!checkStringEmpty(str))
        return '';

    let finalString = '';

    for (let newCharacter of str) {
        finalString = newCharacter + finalString;
    }

    return finalString;
}

function reverseMethodFifth(str) {
    if (!checkStringEmpty(str))
        return '';

    // array.reduce((result, newvalue) => { newvalue + result }, initialValue)
    return str.split('').reduce((finalString, newCharacter) => {
        return newCharacter + finalString;
    }, '');
}

function reverseMethodSixth(str) {
    if (!checkStringEmpty(str))
        return '';

    return reverseMethodSixth(str.substr(1)) + str.charAt(0);
}

module.exports = { reverseMethodOne, reverseMethodSecond, reverseMethodThird, reverseMethodForth, reverseMethodFifth, reverseMethodSixth };

// https://www.geeksforgeeks.org/reverse-a-string-in-javascript/

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// For Sixth Example - reverseMethodSixth('SAD');
// 1 CALL - (reverseMethodSixth("AD") + "S")
// 2 CALL - ((reverseMethodSixth("D") + "A") + "S")
// 3 CALL - (((reverseMethodSixth("") + "D") + "A") + "S")
// 3 CALL - ((("" + "D") + "A") + "S")

// https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript