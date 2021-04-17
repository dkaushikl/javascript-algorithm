function test(arr, m) {
  let finalArr = [];

  let i = 0;
  let j = i;

  while (i < arr.length) {
    while (j < arr.length) {
      const arrResult = arr.slice(i, j + 1);
      finalArr.push(arrResult);
      j++;
    }

    i++;
    j = i;
  }

  let result = -1;

  finalArr.forEach(val => {
    let sum = val.reduce((a, b) => b + a, 0);
    let modulo = sum % m;
    if (modulo > result) result = modulo;
  });

  console.log(result);
}
function rotateMatrix(a) {
  var reversed = a.reverse();
  console.log(reversed);

  return reversed[0].map((col, i) => {
    return reversed.map(row => row[i]);
  });
}

function findFirstSubstringOccurrence(s, x) {
  var slen = s.length;
  var xlen = x.length;

  var target = 0;
  for (var i = 0; i < xlen; i++) {
    target += x.charCodeAt(i);
  }

  var sum = 0;
  for (var i = 0; i < xlen; i++) {
    sum += s.charCodeAt(i);
  }

  if (sum == target && x == s.substr(0, xlen)) return 0;

  var last = s.charCodeAt(0);
  var len = slen - xlen;
  for (var i = 1; i <= len; i++) {
    sum -= last;
    sum += s.charCodeAt(i + xlen - 1);
    last = s.charCodeAt(i);

    // only check the substring if numbers add up
    if (sum == target && x == s.substr(i, xlen)) return i;
  }

  return -1;
}

function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}

function makeArrayConsecutive2(statues) {
  if (statues.length <= 1) return 0;

  const [min, max] = [Math.min(...statues), Math.max(...statues)];

  const totalRemainingLength = max - min + 1;

  return Math.abs(totalRemainingLength - statues.length - 1);
}

function almostIncreasingSequence(sequence) {
  const filterArr = sequence.slice(1).filter((x, i) => sequence[i] > x);
  return filterArr.length <= 1 ? true : false;
}

function findMedian(arr1, arr2) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    }

    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }

  for (let index1 = i; index1 < arr1.length; index1++) result.push(arr1[index1]);

  for (let index2 = j; index2 < arr2.length; index2++) result.push(arr2[index2]);

  return result.length % 2 === 0
    ? (result[result.length / 2 - 1] + result[result.length / 2]) / 2
    : result[Math.floor(result.length / 2)];
}

// function commonElement(kArray) {
//     console.log(`kArray`, kArray);
//     var hashmap = {}, last, answer = [];

//     for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
//       var currentArray = kArray[i];
//       last = null;

//       for (var j = 0, currentArrayLength = currentArray.length; j < currentArrayLength; j++) {
//         var currentElement = currentArray[j];

//         if (last !== currentElement) {
//             if (hashmap[currentElement]) {
//                 hashmap[currentElement] += 1;
//             } else {
//                 hashmap[currentElement] = 1;
//             }
//         }
//         last = currentElement;
//       }
//     }

//     for (var prop in hashmap) {

//     }

// }

// function generateMatrix(row, column) {
//     let result = new Array(row);

//         for (let i = 0; i < column; i += 1) {
//             result[i] = new Array(column);
//         }

//     return result;
// }

// console.log(generateMatrix(3, 4))

var m = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// function spinalMatrix(arr) {
//   var topRow = 0, leftCol = 0, btmRow = arr.length - 1, rightCol = arr[0].length - 1;

//   while (topRow < btmRow && leftCol < rightCol) {
//     for (let col = 0; col < array.length; col++) {
//         const element = array[col];

//     }
//   }
// }

// spinalMatrix(m);

function checkRow(arr, sign) {
  for (let i = 0; i < arr.length; i++) if (arr[i][0] === sign && arr[i][1] === sign && arr[i][2] === sign) return true;

  return false;
}

function checkColumn(arr, sign) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) if (arr[i][0] === sign) count++;

  return count === 3 ? true : false;
}

function ticTacTOE(arr, sign) {
  const checkRowOkay = checkRow(arr, sign);

  const checkColumnOkay = checkColumn(arr, sign);

  console.log(checkRowOkay);
}

ticTacTOE(
  [
    ['O', 'O', 'O'],
    ['X', 'O', '-'],
    ['X', 'X', 'O'],
  ],
  'O',
);

// commonElement([[1, 2, 3], [1, 2, 3, 4], [1, 2]]);

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

// findFirstSubstringOccurrence("CodefightsIsAwesome", "IsA")

// test([3, 3, 9, 9, 5], 7)`````

function findPeakFromTwoD(arr, rowLength, colLength) {
  for (let i = 1; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (j - 1 >= 0 && arr[i][j - 1] < arr[i][j]) continue;

      if (j + 1 >= colLength - 1 && arr[i][j + 1] < arr[i][j]) continue;

      if (i + 1 >= rowLength - 1 && arr[i + 1][j] < arr[i][j]) continue;

      if (i - 1 >= 0 && arr[i - 1][j] < arr[i][j]) continue;

      return arr[i][j];
    }
  }

  return -1;
}

const arr = [
  [10, 20, 16],
  [21, 30, 14],
  [7, 16, 32],
];

console.log(findPeakFromTwoD(arr, arr.length, arr[0].length));
