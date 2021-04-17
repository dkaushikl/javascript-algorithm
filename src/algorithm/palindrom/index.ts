// -- Directions

// Given a string, return true if the string is a palindrome
// or else if it is not. Palindromes are strings that
// form the same word if it is reversed
// order of characters

// --- Examples
//   reverse('appa') === true
//   reverse('hello') === false

// How to use regular expression.

import { ReverseString } from './../reversestring';
import { Utills } from '../../utills';

/** Palindrom Class */
export class Palindrom {
  /**
   * Check whether string is palindrom
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  static One(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    // Custom regular expression
    // first replace used to convert dash to slash
    // second replace used to remove dash, parenthesis, single quote, double quote and comma
    // third replace used to remove whitespace
    const finalString = arg
      .replace(/\-/g, '/')
      .replace(/\.|["'()–_/,]/gi, '')
      .replace(/\s/gi, '')
      .toLowerCase();
    const reversed = ReverseString.One(finalString);
    return (
      finalString ===
      reversed
        .replace(/\-/g, '/')
        .replace(/\.|["'()–_/,]/gi, '')
        .replace(/\s/gi, '')
        .toLowerCase()
    );
  }

  /**
   * Check whether string is palindrom
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  static Two(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    // replace all the symbol by generic regular expression
    const re = /[\W_]/g;
    const lowRegStr = arg.toLowerCase().replace(re, '');
    const reverseStr = ReverseString.One(lowRegStr);
    return reverseStr === lowRegStr;
  }

  /**
   * Check whether string is palindrom
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  static Three(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    // remove symbol by below regular expression
    const re = /[^A-Za-z0-9]/g;
    const lowRegStr = arg.toLowerCase().replace(re, '');
    const reverseStr = ReverseString.One(lowRegStr);
    return reverseStr === lowRegStr;
  }

  /**
   * Check whether string is palindrom
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  static Forth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const re = /[^A-Za-z0-9]/g;
    const lowRegStr = arg.toLowerCase().replace(re, '');

    const stringDevideLength = lowRegStr.length / 2;
    let finalValue = stringDevideLength;

    if (!Number.isInteger(stringDevideLength)) {
      // Math.ceil is used to take nearest integer value.
      finalValue = Math.ceil(stringDevideLength);
    }

    const leftPart = lowRegStr.substr(0, finalValue);
    const rightPart = !Number.isInteger(stringDevideLength)
      ? lowRegStr
          .substr(stringDevideLength)
          .split('')
          .reverse()
          .join('')
      : lowRegStr
          .substr(finalValue)
          .split('')
          .reverse()
          .join('');

    return leftPart === rightPart;
  }

  /**
   * Check whether string is palindrom
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  static Fifth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    const re = /[\W_]/g;
    const lowRegStr = arg.toLowerCase().replace(re, '');
    return lowRegStr.split('').every((char, i) => {
      return char === lowRegStr[lowRegStr.length - i - 1];
    });
  }
}

// https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/reverseMethodOne
