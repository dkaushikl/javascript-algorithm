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

const utils = require('../utils/index.js');

function stepsOne(number) {
    if (!utils.checkNumberEmpty(number)) {
        return '';
    }

    let index = 0;
    while (index < number) {
        let index2 = 0;
        while (index2 <= number) {
            console.log(`${index2 < index ? '*' : ' '}`);
            index2++;
        }
        console.log('\n');
        index++;
    }
}

function stepsTwo(number) {
    if (!utils.checkNumberEmpty(number)) {
        return '';
    }

    for (let index = 0; index < number; index++) {
        for (let index2 = 0; index2 < number; index2++) {
            console.log(`${index2 < index ? '*' : ' '}`);
        }
        console.log('\n');
    }
}

function stepsThree(number) {
    if (!utils.checkNumberEmpty(number)) {
        return '';
    }

    [...Array(number)].map((_, index) => {
        [...Array(number)].map((_, index2) => {
            console.log(`${index2 < index ? '*' : ' '}`);
        });
        console.log('\n');
    });
}

function stepsForth(number) {
    if (!utils.checkNumberEmpty(number)) {
        return '';
    }

    // [...Array(number + 1)] -> if number is 10, it will generate 11 undefined value array
    // it needs because of array reduce method starting to loop from 1 and given number.  
    [...Array(number + 1)].reduce((finalValue, newValue, index) => {
        index--;
        [...Array(number + 1)].reduce((finalValue2, newValue2, index2) => {
            index2--;
            console.log(`${index2 < index ? '*' : ' '}`);
        });
        console.log('\n');
    });
}

function stepsFifth(number) {
    if (!utils.checkNumberEmpty(number)) {
        return '';
    }

    [...Array(number)].forEach((_, index) => {
        [...Array(number)].forEach((_, index2) => {
            console.log(`${index2 < index ? '*' : ' '}`);
        });
        console.log('\n');
    });
}

function stepsSixth(number) {
    if (!utils.checkNumberEmpty(number)) {
        return '';
    }

    [...Array(number)].flatMap((_, index) => {
        [...Array(number)].flatMap((_, index2) => {
            console.log(`${index2 < index ? '*' : ' '}`);
        });
        console.log('\n');
    });
}

module.exports = { stepsOne, stepsTwo, stepsThree, stepsForth, stepsFifth, stepsSixth };
