/** Utility Class */
class Utills {
  /**
   * Check whether string is empty
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  static CheckStringEmpty(arg) {
    return arg === null || arg === undefined || arg.trim().length === 0 ? false : true;
  }

  /**
   * Check whether number is empty
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  static CheckNumberEmpty(num) {
    if (typeof num === 'number') {
      return true;
    }

    if (!num) {
      return false;
    }

    if (typeof num !== 'string' || num.trim().length <= 0) {
      return false;
    }

    const reg = /^.+$/g;
    return reg.test(num);
  }

  /**
   * Conver into string
   *
   * @public
   * @method
   * @param {Any} arg
   * @return {String}
   */
  static ConvertToString(arg) {
    if (typeof arg === 'number') {
      return `${arg}`;
    }

    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    return `${arg}`;
  }

  /**
   * Return negative number
   *
   * @public
   * @method
   * @param {Number} arg
   * @return {Number}
   */
  static ConvertNagativeInteger(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    return -Math.abs(arg);
  }

  /**
   * Convert string into number
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static ConvertToNumber(arg) {
    if (!Utills.CheckNumberEmpty(arg)) {
      return '';
    }

    return parseFloat(arg);
  }

  /**
   * Convert into number
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  static CheckArrayEmpty(arg) {
    return Array.isArray(arg) && arg.length > 0;
  }

  /**
   * Make string clear by removing unwanted parenthesis, elipsis and whitespace
   *
   * @public
   * @method
   * @param {String} arg - String needs to be clear
   * @return {Number}
   */
  static ClearString(arg) {
    return Utills.ConvertToString(arg)
      .toLowerCase()
      .replace(/[\W_]/g, '');
  }

  /**
   * Convert into array from string
   *
   * @public
   * @method
   * @param {String} arg1 - String needs to be convert into array
   * @param {String} arg2 - Split by this string
   * @return {Number}
   */
  static ConvertToArray(arg1, arg2) {
    return Utills.ConvertToString(arg1)
      .toLowerCase()
      .split(arg2);
  }
}

module.exports = Utills;
