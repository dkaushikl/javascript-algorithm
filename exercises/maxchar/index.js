// -- Directions

// Given a string, return the character that is most
// commanly used in the string.

// --- Examples
//   One('abcccdd') === c
//   One('kaushik') === k

const Utills = require('../utills/index.js');

/** MaxChar Class */
class MaxChar {
  /**
       * 	MaxChar Program
       *
       * @public
       * @method
       * @param {String} arg
       * @return {Char}
       */
  static One(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const resultArray = [];

    arg.split('').forEach((arrayKey) => {
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

  /**
     * 	MaxChar Program
     *
     * @public
     * @method
     * @param {String} arg
     * @return {Char}
     */
  static Two(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const resultArray = Utills.ConvertToString(arg).toLowerCase().split('').reduce((finalResult, newChar) => {
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

  /**
     * 	MaxChar Program
     *
     * @public
     * @method
     * @param {String} arg
     * @return {Char}
     */
  static Three(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (const char of arg.toLowerCase()) {
      if (charMap[char]) {
        charMap[char] += 1;
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
}

module.exports = MaxChar;
