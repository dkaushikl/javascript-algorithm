// -- Directions

// Given a string, return the character that is most
// commanly used in the string.

// --- Examples
//   maxcharOne('abcccdd') === c
//   maxcharOne('kaushik') === k

const utils = require('../utils/index.js');

function maxCharMethodOne(str) {
    if (!utils.checkStringEmpty(str)) {
        return '';
    }

    const resultArray = [];

    str.split('').forEach((arrayKey) => {
        const keyIndex = resultArray.findIndex((x) => x.key === arrayKey);

        if (keyIndex >= 0) {
            resultArray[keyIndex].value = resultArray[keyIndex].value + 1;
            return;
        }
        const obj = {
            key: arrayKey,
            value: 1,
        };
        resultArray.push(obj);
        return;
    });

    const finalResult = resultArray.reduce((result, newValue) => {
        return newValue.value > result.value ? newValue : result;
    });

    return finalResult.key;
}

function maxCharMethodTwo(str) {
    if (!utils.checkStringEmpty(str)) {
        return '';
    }

    const resultArray = utils.convertToString(str).toLowerCase().split('').reduce((finalResult, newChar) => {
        const keyIndex = finalResult.findIndex((x) => x.key === newChar);
        if (keyIndex >= 0) {
            finalResult[keyIndex].value = finalResult[keyIndex].value + 1;
        } else {
            finalResult.push({
                key: newChar,
                value: 1,
            });
        }
        return finalResult;
    }, []).reduce((prev, current) => prev.value > current.value ? prev : current);

    return resultArray.key;
}

function maxCharMethodThree(str) {
    if (!utils.checkStringEmpty(str)) {
        return '';
    }

    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (const char of str.toLowerCase()) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (const char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = { maxCharMethodOne, maxCharMethodTwo, maxCharMethodThree };
