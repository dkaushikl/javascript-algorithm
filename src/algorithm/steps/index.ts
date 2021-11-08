// -- Directions

// Write a function that accept a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the
// step has spaces on the right hand side!

// --- Examples
//   steps(2) -->
//   '# '
//   '##'

// --- Examples
//   steps(3) -->
//   '#  '
//   '## '
//   '###'

import { Utills } from '../../utills';

/** Steps Class */
class Steps {
  public static One(number) {
    if (!Utills.CheckNumberEmpty(number)) {
      return '';
    }

    let index = 0;
    while (index < number) {
      let index2 = 0;
      while (index2 <= number) {
        console.log(`${index2 < index ? '*' : ' '}`);
        index2 += 1;
      }
      console.log('\n');
      index += 1;
    }
  }

  public static Two(number) {
    if (!Utills.CheckNumberEmpty(number)) {
      return '';
    }

    for (let index = 0; index < number; index += 1) {
      for (let index2 = 0; index2 < number; index2 += 1) {
        console.log(`${index2 < index ? '*' : ' '}`);
      }
      console.log('\n');
    }
  }

  public static Three(number) {
    if (!Utills.CheckNumberEmpty(number)) {
      return '';
    }

    [...Array(number)].map((_, index) => {
      [...Array(number)].map((_, index2) => {
        console.log(`${index2 < index ? '*' : ' '}`);
      });
      console.log('\n');
    });
  }

  public static Forth(number) {
    if (!Utills.CheckNumberEmpty(number)) {
      return '';
    }

    // [...Array(number + 1)] -> if number is 10, it will generate 11 undefined value array
    // it needs because of array reduce method starting to loop from 1 and given number.
    [...Array(number + 1)].reduce((finalValue, newValue, index) => {
      index -= 1;
      [...Array(number + 1)].reduce((finalValue2, newValue2, index2) => {
        index2 -= 1;
        console.log(`${index2 < index ? '*' : ' '}`);
      });
      console.log('\n');
    });
  }

  public static Fifth(number) {
    if (!Utills.CheckNumberEmpty(number)) {
      return '';
    }

    [...Array(number)].forEach((_, index) => {
      [...Array(number)].forEach((_, index2) => {
        console.log(`${index2 < index ? '*' : ' '}`);
      });
      console.log('\n');
    });
  }

  public static Sixth(number) {
    if (!Utills.CheckNumberEmpty(number)) {
      return '';
    }

    [...Array(number)].flatMap((_, index) => {
      [...Array(number)].flatMap((_, index2) => {
        console.log(`${index2 < index ? '*' : ' '}`);
      });
      console.log('\n');
    });
  }

  // static Seventh(number, index = 0, column = '') {
  //   if (number === index) {
  //     return;
  //   }

  //   if (column.length === number) {
  //     document.write(column);
  //     document.write('<br>');
  //     this.Seventh(number, index += 1);
  //   }

  //   this.Seventh(number, index, index2 + (index2.length <= index ? '*' : index2.length));
  // }
}

module.exports = Steps;
