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

    let i = 0;
    while (i < number) {
        let j = 0;
        while (j < number) {
            console.log(`${j < i ? '*' : ' '}`);
            j++;
        }
        console.log('\n');
        i++;
    }
}

function stepsTwo(number) {
    if (!utils.checkNumberEmpty(number)) {
        return '';
    }

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            console.log(`${j < i ? '*' : ' '}`);
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

    [...Array(number)].reduce((finalValue, newValue, index) => {
        [...Array(number)].reduce((finalValue2, newValue2, index2) => {
            console.log(`${index2 < index ? '*' : ' '}`);
        });
        console.log('\n');
    });
}

module.exports = { stepsOne, stepsTwo, stepsThree, stepsForth };
