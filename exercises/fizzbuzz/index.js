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
        finalResult += `${finalResult ? `,` : ''}${((index % 3 ? '' : 'fizz') + (index % 5 ? '' : 'buzz')  || index)}`;
    }
    return finalResult;
}

module.exports = { fizzBuzzOne, fizzBuzzTwo, fizzBuzzThree, fizzBuzzForth };
