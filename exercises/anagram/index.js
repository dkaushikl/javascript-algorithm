// -- Directions

// Check to see if two provided strings are anagrams of eachother.
// one string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case

// --- Examples
//   anagram('Rail Safety', 'fairy tales') --> true
//   anagram('Rail! Safety!', 'fairy tales') --> true
//   anagram(`Hi there`, `Bye there`) --> false

const utils = require('../utils/index.js');

/**
 * @param {String} mainString - First string
 * @param {String} checkedString - Second string
 * @return {Boolean} check whether string is anagram or not
 */
function anagramOne(mainString, checkedString) {
    if (!utils.checkStringEmpty(mainString) || !utils.checkStringEmpty(checkedString)) {
        return '';
    }

    // Sort is used to sorting the array alphabet wise.
    const firstString = utils.clearString(mainString).split('').sort().join('');

    const secondString = utils.clearString(checkedString).split('').sort().join('');

    return firstString == secondString;
}

function anagramTwo(mainString, checkedString) {
    if (!utils.checkStringEmpty(mainString) || !utils.checkStringEmpty(checkedString)) {
        return '';
    }

    // Sort is used to sorting the array alphabet wise.
    const firstString = utils.clearString(mainString);
    const secondString = utils.clearString(checkedString);

    if (firstString.length !== secondString.length) {
        return false;
    }

    const result = {};
    for (const char of firstString) {
        result[char] = result[char] ? result[char] += 1 : result[char] = 1;
    }

    for (const char of secondString) {
        if (!result[char]) {
            return false;
        }
    }
    return true;
}

function anagramThree(mainString, checkedString) {
    if (!utils.checkStringEmpty(mainString) || !utils.checkStringEmpty(checkedString)) {
        return '';
    }

    const firstString = utils.clearString(mainString).split('').sort();
    const secondString = utils.clearString(checkedString);

    let isAnagram = true;

    for (const element of secondString) {
        const letterIndex = firstString.findIndex((x) => x === element);
        if (letterIndex === -1) {
            isAnagram = false;
            break;
        }
    }

    return isAnagram;
}

module.exports = { anagramOne, anagramTwo, anagramThree };
