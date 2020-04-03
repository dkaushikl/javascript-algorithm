// -- Directions

// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

// --- Examples
//   chunk([1,2,3,4], 2) --> [[1,2], [3,4]]
//   chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
//   chunk([1,2,3,4,5, 6, 7, 8], 3) --> [[1,2,3], [4,5,6], [7,8]]
//   chunk([1,2,3,4,5], 4) --> [[1,2,3,4], [5]]
//   chunk([1,2,3,4,5], 10) --> [[1,2,3,4,5]] 

// What is array slice
// What is array splice

// differance between slice and splice

// splice
// var array=[1,2,3,4,5];
// console.log(array.splice(2));

// slice
// var array2=[1,2,3,4,5]
// console.log(array2.slice(2));


// console.log("----after-----");
// console.log(array);
// console.log(array2);

// splice array returns [1, 2]
// slice array returns [1, 2, 3, 4, 5]

const utils = require('../utils/index.js');

function chunkOne(arr, size) {
    if (!utils.checkArrayEmpty(arr))
        return '';

    if (!utils.checkNumberEmpty(size))
        return '';

    const finalResult = [];
    let chunked = [];

    for (const index in arr) {
        chunked.push(arr[index]);

        if (chunked.length === size) {
            finalResult.push(chunked);
            chunked = [];
            continue;
        }

        if (arr.length === (utils.convertToNumber(index) + 1)) {
            finalResult.push(chunked);
            break;
        }
    }

    return finalResult;
}

function chunkTwo(arr, size) {
    if (!utils.checkArrayEmpty(arr))
        return '';

    if (!utils.checkNumberEmpty(size))
        return '';

    const finalResult = [];

    for (const element of arr) {
        const last = finalResult[finalResult.length - 1];

        if (!last || last.length == size) {
            finalResult.push([element]);
        } else {
            last.push(element);
        }
    }

    return finalResult;
}

function chunkThree(arr, size) {
    if (!utils.checkArrayEmpty(arr))
        return '';

    if (!utils.checkNumberEmpty(size))
        return '';

    const finalResult = [];
    let index = 0;

    while (index < arr.length) {
        // slice is used for cut the array.
        // for e.g. -> [1, 2, 3].slice(1, 2) => it will return [2]
        // for e.g. -> [1, 2, 3, 4].slice(0, 2) => it will return [1, 2]
        finalResult.push(arr.slice(index, index + size));
        index = index + size;
    }

    return finalResult;
}

function chunkForth(arr, size) {
    if (!utils.checkArrayEmpty(arr))
        return '';

    if (!utils.checkNumberEmpty(size))
        return '';

    const finalResult = [];

    while (arr.length > 0) {
        finalResult.push(arr.splice(0, size));
    }
    return finalResult;
}

function chunkFifth(arr, size) {
    if (!utils.checkArrayEmpty(arr))
        return '';

    if (!utils.checkNumberEmpty(size))
        return '';

    const finalResult = [];
    const numOfChild = Math.ceil(arr.length / size);

    for (let index = 0; index < numOfChild; index++) {
        finalResult.push(arr.splice(0, size));
    }

    return finalResult;
}

module.exports = { chunkOne, chunkTwo, chunkThree, chunkForth, chunkFifth };

// https://stackoverflow.com/questions/37601282/javascript-array-splice-vs-slice