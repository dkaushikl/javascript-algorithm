// -- Directions

// Given a integer, return an integer that is the reverse
// ordering of numbers

// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

import { Utills } from '../../utills';

/** ReverseInt Class */
export class ReverseInt {
  /**
   * return reverse interger
   *
   * @public
   * @method
   * @param {Number} arg
   * @return {Number}
   */
  public static One(arg: number) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    const callRecursive = this.One(+Utills.ConvertToString(arg).substr(1));
    const result =
      `${callRecursive}` + `${Utills.ConvertToString(arg).charAt(0)}`;

    if (Number.isInteger(arg)) {
      return arg <= 0 ? -Math.abs(parseFloat(result)) : parseFloat(result);
    } else {
      return arg <= 0 ? -Math.abs(result) : result;
    }
  }

  /**
   * return reverse interger
   *
   * @public
   * @method
   * @param {Number} arg
   * @return {Number}
   */
  public static Two(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    const numberArray = Utills.ConvertToString(arg).split('');

    const result = parseFloat(
      numberArray.reduce((finalString, newChar) => {
        return newChar + finalString;
      })
    );

    return arg <= 0 ? Utills.ConvertNagativeInteger(result) : result;
  }

  /**
   * return reverse interger
   *
   * @public
   * @method
   * @param {Number} arg
   * @return {Number}
   */
  public static Three(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    const result = parseFloat(
      Utills.ConvertToString(arg)
        .split('')
        .reverse()
        .join('')
    );
    return arg <= 0 ? -Math.abs(result) : result;
  }

  /**
   * return reverse interger
   *
   * @public
   * @method
   * @param {Number} arg
   * @return {Number}
   */
  public static Forth(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    const stringNumber = `${arg}`;
    const arrayNumber = stringNumber.split('');

    let result = '';
    for (const objValue of arrayNumber) {
      result = objValue + result;
    }

    return arg <= 0 ? -Math.abs(parseFloat(result)) : parseFloat(result);
  }
}

// https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
