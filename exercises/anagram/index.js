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

function anagramOne(mainString, checkedString) {
    if (!utils.checkStringEmpty(mainString) ||
        !utils.checkStringEmpty(checkedString)) {
        return '';
    }

    // Sort is used to sorting the array alphabet wise.
    const firstString = utils.convertToString(mainString)
        .toLowerCase()
        .replace(/[\W_]/g, '')
        .split('')
        .sort()
        .join('');

    const secondString = utils.convertToString(checkedString)
        .toLowerCase()
        .replace(/[\W_]/g, '')
        .split('')
        .sort()
        .join('');

    return firstString == secondString;
}

anagramOne('!!@##()act,{}', '!!@##()cat,{}');

module.exports = { anagramOne };
