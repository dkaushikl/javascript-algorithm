// -- Directions

// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// "fizz" instead of the number and for the multiples
// of five print "buzz". for numbers which are multiples
// of both three and five print "fizzbuzz".

// --- Examples
//   fizzBuzz(5)
//   1
//   2
//   fizz
//   4
//   buzz

// what is the differance between array.apply and array()

const Utills = require('../utills/index.js');

/** FizzBuzz Class */
class FizzBuzz {
  /**
   * FizzBuzz Program
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static One(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    let finalResult = '';
    for (let index = 1; index <= arg; index += 1) {
      finalResult += `${finalResult ? ',' : ''}`;
      if (index % 3 === 0 && index % 5 === 0) {
        finalResult += 'fizzbuzz';
      } else if (index % 3 === 0) {
        finalResult += 'fizz';
      } else if (index % 5 === 0) {
        finalResult += 'buzz';
      } else {
        finalResult += index;
      }
    }
    return finalResult;
  }

  /**
   * FizzBuzz Program
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static Two(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    const finalResult = [];
    let index = 1;
    while (index <= arg) {
      if (index % 3 === 0 && index % 5 === 0) {
        finalResult.push('fizzbuzz');
      } else if (index % 3 === 0) {
        finalResult.push('fizz');
      } else if (index % 5 === 0) {
        finalResult.push('buzz');
      } else {
        finalResult.push(index);
      }
      index += 1;
    }

    return finalResult.join(',');
  }

  /**
   * FizzBuzz Program
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static Three(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    let finalResult = '';
    for (let index = 1; index <= arg; index += 1) {
      const f = index % 3 === 0;
      const b = index % 5 === 0;
      finalResult = `${finalResult ? `${finalResult},` : ''}${f ? (b ? 'fizzbuzz' : 'fizz') : b ? 'buzz' : index}`;
    }
    return finalResult;
  }

  /**
   * FizzBuzz Program
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static Forth(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    let finalResult = '';
    for (let index = 1; index <= arg; index += 1) {
      finalResult += `${finalResult ? ',' : ''}${(index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz') || index}`;
    }
    return finalResult;
  }

  /**
   * FizzBuzz Program
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static Fifth(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    let finalResult = '';

    // Array[4] is used to generate empty array
    // For e.g. -> it will generate 4 length empty array
    // fill() method is used to fill data in array
    // For e.g. -> Array(4).fill() it will generate [undefined, undefined, undefined, undefined]
    // For e.g. -> Array(4).fill(1) it will generate [1, 1, 1, 1]

    // here you can [...Array(100)] instead of Array(arg).fill()
    // For e.g. -> [...Array(4)] it will generate [undefined, undefined, undefined, undefined]
    // For e.g. -> [...Array(4).keys()] it will generate [1, 2, 3, 4]
    Array(arg)
      .fill()
      .map((undefined, index) => {
        index += 1;
        finalResult += `${finalResult ? ',' : ''}${(index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz') || index}`;
        return;
      });
    return finalResult;
  }

  /**
   * FizzBuzz Program
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static Sixth(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    let finalResult = '';

    // Array.apply(null, 2) is used to generate undefined array
    // For e.g. -> Array.apply(null, 2) it will generate [undefined, undefined]
    // Array.apply(null, Array(arg))
    [...Array(arg)].map((_, index) => {
      index += 1;
      finalResult += `${finalResult ? ',' : ''}${(index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz') || index}`;
      return;
    });
    return finalResult;
  }

  /**
   * FizzBuzz Program
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static Seventh(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    let finalResult = '';

    // Object.keys(new Int8Array(100)) is used to generate string wise number array
    // For e.g. -> Object.keys(new Int8Array(5)) it will generate ["0", "1", "2", "3", "4"]

    Object.keys(new Int8Array(arg)).map((_, index) => {
      index += 1;
      finalResult += `${finalResult ? ',' : ''}${(index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz') || index}`;
      return;
    });
    return finalResult;
  }
}

module.exports = FizzBuzz;

// https://stackoverflow.com/questions/28416547/difference-between-array-applynull-arrayx-and-arrayx
