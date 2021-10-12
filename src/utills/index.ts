//  Utility Class

export class Utills {
  /**
   * Check whether string is empty
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  public static CheckStringEmpty(arg: string): boolean {
    return !(arg === null || arg === undefined || arg.trim().length === 0);
  }

  /**
   * Check whether number is empty
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Boolean}
   */
  public static CheckNumberEmpty(num: string | number): boolean {
    if (!num) {
      return false;
    }

    if (typeof num !== 'string' || num.trim().length <= 0) {
      return false;
    }

    return /^.+$/g.test(num);
  }

  /**
   * Conver into string
   *
   * @public
   * @method
   * @param {Any} arg
   * @return {String}
   */
  public static ConvertToString(arg: string | number): string {
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
  public static ConvertNagativeInteger(arg: string | number): number {
    if (!Utills.CheckNumberEmpty(arg)) {
      return 0;
    }
    return -Math.abs(+arg);
  }

  /**
   * Convert string into number
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  public static ConvertToNumber(arg: string | number): number {
    if (!Utills.CheckNumberEmpty(arg)) {
      return 0;
    }
    return +arg;
  }

  /**
   * Convert into number
   *
   * @public
   * @method
   * @param {String} arg
   * @return {Number}
   */
  public static CheckArrayEmpty(arg: any): boolean {
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
  public static ClearString(arg: string): string {
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
  public static ConvertToArray(arg1: string, arg2: string): any[] {
    return Utills.ConvertToString(arg1)
      .toLowerCase()
      .split(arg2);
  }
}
