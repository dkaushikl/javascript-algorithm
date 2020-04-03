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

const utils = require('../utils/index.js');

function fizzBuzzOne(num) {
    if (!utils.checkNumberEmpty(num))
        return '';

    const finalResult = [];
    for (let index = 1; index <= num; index++) {
        if ((index % 3) == 0 && (index % 5) == 0) {
            finalResult.push('fizzbuzz')
            continue;
        }

        if ((index % 3) == 0) {
            finalResult.push('fizz')
            continue;
        }

        if ((index % 5) == 0) {
            finalResult.push('buzz')
            continue;
        }

        finalResult.push(index)
    }
    return finalResult.join(',');
}

function fizzBuzzTwo(num) {
    if (!utils.checkNumberEmpty(num))
        return '';

    const finalResult = [];
    let index = 1;
    while (index <= num) {
        if ((index % 3) == 0 && (index % 5) == 0) {
            finalResult.push('fizzbuzz')
        }
        else if ((index % 3) == 0) {
            finalResult.push('fizz')
        }
        else if ((index % 5) == 0) {
            finalResult.push('buzz')
        }
        else {
            finalResult.push(index)
        }
        index++;
    }

    return finalResult.join(',');
}

function fizzBuzzThree(num) {
    if (!utils.checkNumberEmpty(num))
        return '';

    let finalResult = '';
    for (let index = 1; index <= num; index++) {
        let f = index % 3 == 0, b = index % 5 == 0;
        finalResult = `${finalResult ? `${finalResult},` : ''}${f ? b ? "fizzbuzz" : "fizz" : b ? "buzz" : index}`
    }
    return finalResult;
}

function fizzBuzzForth(num) {
    if (!utils.checkNumberEmpty(num))
        return '';

    let finalResult = '';
    for (let index = 1; index <= num; index++) {
        finalResult += `${finalResult ? `,` : ''}${((index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz') || index)}`;
    }
    return finalResult;
}

function fizzBuzzFifth(num) {
    if (!utils.checkNumberEmpty(num))
        return '';

    let finalResult = '';

    // Array[4] is used to generate empty array 
    // For e.g. -> it will generate 4 length empty array
    // fill() method is used to fill data in array
    // For e.g. -> Array(4).fill() it will generate [undefined, undefined, undefined, undefined]
    // For e.g. -> Array(4).fill(1) it will generate [1, 1, 1, 1]   
    Array(num).fill().map((undefined, index) => {
        index++;
        finalResult += `${finalResult ? `,` : ''}${((index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz') || index)}`;
        return;
    });
    return finalResult;
}

function fizzBuzzSixth(num) {
    if (!utils.checkNumberEmpty(num))
        return '';

    let finalResult = '';

    // Array.apply(null, 2) is used to generate undefined array
    // For e.g. -> Array.apply(null, 2) it will generate [undefined, undefined]

    Array.apply(null, Array(num)).map((_, index) => {
        index++;
        finalResult += `${finalResult ? `,` : ''}${((index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz') || index)}`;
        return;
    });
    return finalResult;
}

function fizzBuzzSeventh(num) {
    if (!utils.checkNumberEmpty(num))
        return '';

    let finalResult = '';

    // Object.keys(new Int8Array(100)) is used to generate strign wise number array
    // For e.g. -> Object.keys(new Int8Array(5)) it will generate ["0", "1", "2", "3", "4"]

    Object.keys(new Int8Array(num)).map((_, index) => {
        index++;
        finalResult += `${finalResult ? `,` : ''}${((index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz') || index)}`;
        return;
    });
    return finalResult;
}

module.exports = { fizzBuzzOne, fizzBuzzTwo, fizzBuzzThree, fizzBuzzForth, fizzBuzzFifth, fizzBuzzSixth, fizzBuzzSeventh };

// https://stackoverflow.com/questions/28416547/difference-between-array-applynull-arrayx-and-arrayx