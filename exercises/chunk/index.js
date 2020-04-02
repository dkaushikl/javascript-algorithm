// -- Directions

// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

// --- Examples
//   chunk([1,2,3,4], 2) --> [[1,2], [3,4]]
//   chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
//   chunk([1,2,3,4,5, 6, 7, 8], 3) --> [[1,2,3], [4,5,6], [7,8]]
//   chunk([1,2,3,4,5], 4) --> [[1,2,3,4], [5]]
//   chunk([1,2,3,4,5], 10) --> [[1,2,3,4,5]] 


const utils = require('../utils/index.js');

function chunkOne(arr, num) {
    if (!utils.checkArrayEmpty(arr))
        return '';

    if (!utils.checkNumberEmpty(num))
        return '';

    const finalResult = [];
    let chunked = [];
    let isArrayChunk = false;

    for (const index in arr) {
        chunked.push(arr[index]);
        isArrayChunk = chunked.length === num;

        if (isArrayChunk) {
            finalResult.push(chunked);
            chunked = [];
            isArrayChunk = false;
            continue;
        }

        if (arr.length === (utils.convertToNumber(index) + 1)) {
            finalResult.push(chunked);
            break;
        }
    }

    return finalResult;
}

function chunkTwo(arr, num) {
    if (!utils.checkArrayEmpty(arr))
        return '';

    if (!utils.checkNumberEmpty(num))
        return '';

    const finalResult = [];

    for (const element of arr) {
        const last = finalResult[finalResult.length - 1];

        if(!last || last.length == num) {
            finalResult.push([element]);
        } else {
            last.push(element);
        }
    }

    return finalResult;
}

module.exports = { chunkOne, chunkTwo };
