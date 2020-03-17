// -- Directions

//  --- Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Differance between For of and For in.

function reverseMethodOne(str) {
    if (!checkempty(str))
        return '';

    return str.split('').reverse().join('');
}

function reverseMethodSecond(str) {
    if (!checkempty(str))
        return '';

    let finalString = '', stringCount = str.length - 1;

    for (let i = stringCount; i >= 0; i--) {
        finalString += str.charAt(i);
    }

    return finalString;
}

function reverseMethodThird(str) {
    if (!checkempty(str))
        return '';

    let finalString = '', stringCount = str.length - 1;

    while (stringCount >= 0) {
        finalString += str.charAt(stringCount);
        stringCount--;
    }

    return finalString;
}

function reverseMethodForth(str) {
    if (!checkempty(str))
        return '';

    let finalString = '';

    for (let newCharacter of str) {
        finalString = newCharacter + finalString;
    }

    return finalString;
}

function reverseMethodFifth(str) {
    if (!checkempty(str))
        return '';

    // array.reduce((result, newvalue) => { newvalue + result }, initialValue)
    return str.split('').reduce((finalString, newCharacter) => {
        return newCharacter + finalString;
    }, '');
}

function checkempty(str) {
    return str == null || str == undefined || str.length == 0 ? false : true;
}

module.exports = { reverseMethodOne, reverseMethodSecond, reverseMethodThird, reverseMethodForth, reverseMethodFifth };