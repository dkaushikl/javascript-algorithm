// -- Directions

// Check to see if two provided strings are anagrams of eachother.
// one string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case

// --- Examples
//   anagram('Rail Safety', 'fairy tales') --> true
//   anagram('Rail! Safety!', 'fairy tales') --> true
//   anagram(`Hi there`, `Bye there`) --> false

import { Utills } from '../../utills';

/** Anagram Class */
export class Anagram {
  /**
   * Check whether string is anagram
   *
   * @public
   * @method
   * @param {String} arg1 - First argument
   * @param {String} arg2 - Second argument
   * @return {Boolean}
   */

  public static One(arg1, arg2) {
    if (!Utills.CheckStringEmpty(arg1) || !Utills.CheckStringEmpty(arg2)) {
      return '';
    }

    // Sort is used to sorting the array alphabet wise.
    const firstString = Utills.ClearString(arg1)
      .split('')
      .sort()
      .join('');

    const secondString = Utills.ClearString(arg2)
      .split('')
      .sort()
      .join('');

    return firstString === secondString;
  }

  /**
   * Check whether string is anagram
   *
   * @public
   * @method
   * @param {String} arg1 - First argument
   * @param {String} arg2 - Second argument
   * @return {Boolean}
   */

  public static Two(arg1, arg2) {
    if (!Utills.CheckStringEmpty(arg1) || !Utills.CheckStringEmpty(arg2)) {
      return '';
    }

    // Sort is used to sorting the array alphabet wise.
    const firstString = Utills.ClearString(arg1);
    const secondString = Utills.ClearString(arg2);

    if (firstString.length !== secondString.length) {
      return false;
    }

    const result = {};
    for (const char of firstString) {
      result[char] = result[char] ? (result[char] += 1) : (result[char] = 1);
    }

    for (const char of secondString) {
      if (!result[char]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Check whether string is anagram
   *
   * @public
   * @method
   * @param {String} arg1 - First argument
   * @param {String} arg2 - Second argument
   * @return {Boolean}
   */
  public static Three(arg1, arg2) {
    if (!Utills.CheckStringEmpty(arg1) || !Utills.CheckStringEmpty(arg2)) {
      return '';
    }

    const firstString = Utills.ClearString(arg1)
      .split('')
      .sort();
    const secondString = Utills.ClearString(arg2);

    let result = true;

    for (const element of secondString) {
      const letterIndex = firstString.findIndex(x => x === element);
      if (letterIndex === -1) {
        result = false;
        break;
      }
    }

    return result;
  }
}
