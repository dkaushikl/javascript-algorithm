// -- Directions

// Given a string, return the character that is most
// commanly used in the string.

// --- Examples
//   maxcharOne('abcccdd') === c
//   reverse('kaushik') === k

const utils = require('../utils/index.js');

function maxCharMethodOne(str) {
    if (!utils.checkStringEmpty(str))
        return '';

    let resultArray = [];

    str.split("").forEach(arrayKey => {
        const keyIndex = resultArray.findIndex(x => x.key === arrayKey);

        if (keyIndex >= 0) {
            resultArray[keyIndex].value = resultArray[keyIndex].value + 1;
            return;
        }
        const obj = {
            key: arrayKey,
            value: 1,
        }
        resultArray.push(obj);
        return;
    });

    const finalResult = resultArray.reduce((result, newValue) => {
        return newValue.value > result.value ? newValue : result;
    }, { key: '', value: 0 });

    return finalResult.key;
}

module.exports = { maxCharMethodOne };
