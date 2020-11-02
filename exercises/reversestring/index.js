// -- Directions

// Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Differance between For of and For in.
// Javascipt recursion static
// array reduce method

const Utills = require('../Utills/index');

/** Reverse String Class */
class ReverseString {
  /**
         * return reverse string
         *
         * @public
         * @method
         * @param {String} arg
         * @return {String}
         */
  static One(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    return arg
      .split('')
      .reverse()
      .join('');
  }

  /**
       * return reverse string
       *
       * @public
       * @method
       * @param {String} arg
       * @return {String}
       */
  static Second(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    let finalString = '';
    const stringCount = arg.length - 1;

    for (let i = stringCount; i >= 0; i -= 1) {
      finalString += arg.charAt(i);
    }

    return finalString;
  }

  /**
       * return reverse string
       *
       * @public
       * @method
       * @param {String} arg
       * @return {String}
       */
  static Third(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    let finalString = '';
    let stringCount = arg.length - 1;

    while (stringCount >= 0) {
      finalString += arg.charAt(stringCount);
      stringCount -= 1;
    }

    return finalString;
  }

  /**
       * return reverse string
       *
       * @public
       * @method
       * @param {String} arg
       * @return {String}
       */
  static Forth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    let finalString = '';

    for (const newCharacter of arg) {
      finalString = newCharacter + finalString;
    }

    return finalString;
  }

  /**
       * return reverse string
       *
       * @public
       * @method
       * @param {String} arg
       * @return {String}
       */
  static Fifth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    // array.reduce((result, newvalue) => { newvalue + result }, initialValue)
    return arg.split('').reduce((finalString, newCharacter) => {
      return newCharacter + finalString;
    }, '');
  }

  /**
       * return reverse string
       *
       * @public
       * @method
       * @param {String} arg
       * @return {String}
       */
  static Sixth(arg) {
    if (!Utills.CheckStringEmpty(arg)) {
      return '';
    }

    return this.Sixth(arg.substr(1)) + arg.charAt(0);
  }
}

module.exports = ReverseString;


// https://www.geeksforgeeks.org/reverse-a-string-in-javascript/

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// For Sixth Example - reverseMethodSixth('SAD');
// 1 CALL - (reverseMethodSixth("AD") + "S")
// 2 CALL - ((reverseMethodSixth("D") + "A") + "S")
// 3 CALL - (((reverseMethodSixth("") + "D") + "A") + "S")
// 3 CALL - ((("" + "D") + "A") + "S")

// https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript
