// -- Directions

//  --- Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'

function reverseMethodOne(str) {
    return str.split('').reverse().join('');
}

function reverseMethodSecond(str) {
    if (!str && str.trim().length <= 0) {
        return '';
    }

    let finalString = '', stringCount = str.length - 1;

    for (let i = stringCount; i >= 0; i--) {
        finalString += str.charAt(i);
    }

    return finalString;
}

function reverseMethodThird(str) {
    if (!str && str.trim().length <= 0) {
        return '';
    }

    let finalString = '', stringCount = str.length - 1;

    while (stringCount >= 0) {
        finalString += str.charAt(stringCount);
        stringCount--;
    }

    return finalString;
}

module.exports = { reverseMethodOne, reverseMethodSecond, reverseMethodThird };