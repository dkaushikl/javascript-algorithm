// -- Directions

// Write a function that accept a string. The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('hello') --> 'Hello'
//   capitalize('a lazy fox') --> 'A Lazy Fox'

const Utills = require('../utills/index.js');

/** Capitalize Class */
class Capitalize {
  /**
   * Make first letter capital from string and return result.
   *
   * @public
   * @method
   * @param {String} arg - First argument
   * @return {Boolean}
   */

  static One(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const arrayString = Utills.ConvertToArray(arg, ' ');
    let result = '';
    let index = 0;

    while (index < arrayString.length) {
      result += `${result ? ' ' : ''}${arrayString[index].charAt(0).toUpperCase() + arrayString[index].slice(1)}`;
      index += 1;
    }

    return result;
  }

  /**
   * Make first letter capital from string and return result.
   *
   * @public
   * @method
   * @param {String} arg - First argument
   * @return {Boolean}
   */
  static Two(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const arrayString = Utills.ConvertToArray(arg, ' ');
    let result = '';

    for (const element of arrayString) {
      result += `${result ? ' ' : ''}${element.charAt(0).toUpperCase() + element.slice(1)}`;
    }

    return result;
  }

  /**
   * Make first letter capital from string and return result.
   *
   * @public
   * @method
   * @param {String} arg - First argument
   * @return {Boolean}
   */
  static Three(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const arrayString = Utills.ConvertToArray(arg, ' ');

    const result = arrayString.reduce((result, newString) => {
      return `${result ? `${result} ` : ''}${newString.charAt(0).toUpperCase() + newString.slice(1)}`;
    }, '');

    return result;
  }

  /**
   * Make first letter capital from string and return result.
   *
   * @public
   * @method
   * @param {String} arg - First argument
   * @return {Boolean}
   */
  static Forth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const arrayString = Utills.ConvertToArray(arg, ' ');
    let result = '';

    for (let index = 0; index < arrayString.length; index += 1) {
      result += `${result ? ' ' : ''}${arrayString[index].charAt(0).toUpperCase() + arrayString[index].slice(1)}`;
    }

    return result;
  }

  /**
   * Make first letter capital from string and return result.
   *
   * @public
   * @method
   * @param {String} arg - First argument
   * @return {Boolean}
   */
  static Fifth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    arg = Utills.ConvertToString(arg).toLowerCase();
    const stringArray = arg.split(' ');
    const result = `${arg.charAt(0).toUpperCase()}${stringArray[0].slice(1)}`;
    const cutString = stringArray.splice(1).join(' ');
    return `${result}${cutString ? ' ' : ''}${this.Fifth(cutString)}`;
  }

  /**
   * Make first letter capital from string and return result.
   *
   * @public
   * @method
   * @param {String} arg - First argument
   * @return {Boolean}
   */
  static Sixth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    arg = Utills.ConvertToString(arg).toLowerCase();

    let finalResult = arg[0].toUpperCase();

    for (let index = 1; index < arg.length; index += 1) {
      if (arg[index - 1] === ' ') {
        finalResult += arg[index].toUpperCase();
      } else {
        finalResult += arg[index];
      }
    }

    return finalResult;
  }

  /**
   * Make first letter capital from string and return result.
   *
   * @public
   * @method
   * @param {String} arg - First argument
   * @return {Boolean}
   */
  static Seventh(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    let finalResult = '';
    Utills.ConvertToString(arg)
      .toLowerCase()
      .split(' ')
      .map(value => {
        finalResult += `${finalResult ? ' ' : ''}${value.charAt(0).toUpperCase() + value.slice(1)}`;
      });

    return finalResult;
  }

  /**
   * Make first letter capital from string and return result.
   *
   * @public
   * @method
   * @param {String} arg - First argument
   * @return {Boolean}
   */
  static Eighth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    let finalResult = '';
    Utills.ConvertToString(arg)
      .toLowerCase()
      .split(' ')
      .map(value => {
        finalResult += `${finalResult ? ' ' : ''}${value.replace(value[0], value[0].toUpperCase())}`;
      });

    return finalResult;
  }
}

module.exports = Capitalize;
