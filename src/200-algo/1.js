// https://leetcode.com/problems/two-sum/

// Brute-force approach
// let twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// Hashmap
// let twoSum = (nums, target) => {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (map.hasOwnProperty(nums[i])) {
//       return [map[nums[i]], i];
//     } else {
//       map[target - nums[i]] = i;
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// https://www.lintcode.com/problem/607/description
// https://leetcode.com/problems/two-sum-iii-data-structure-design/

// class TwoSum {
//   map = {};

//   add(number) {
//     if (this.map[number]) {
//         const num = this.map[number]++;
//         this.map[number] = num + 1;
//     }
//     else {
//         this.map[number] = 1;
//     }
//   }

//   find(value) {

//     for (let i = 0; i < this.map.length; i++) {
//       if (this.map.hasOwnProperty(Math.abs(value - iterator)) && this.map[Math.abs(value - iterator)] * 2 === ) {
//           return true;
//       }
//     }

//     return false;
//   }
// }

// const twoSum = new TwoSum();
// twoSum.add(1);
// twoSum.add(3);
// twoSum.add(5);
// twoSum.add(5);
// twoSum.add(5);
// // console.log(twoSum.find(4));
// console.log(twoSum.find(15));

// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
// BST
// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val);
//   this.left = (left === null ? 0 : left);
//   this.right = (right === null ? 0 : right);
// }

// let findTarget = function(root, k) {

// };

// const node = new TreeNode();

// https://leetcode.com/problems/3sum/

// Pointer Way
// let threeSum = function(nums) {
//   if (nums.length < 2) return [];
//   nums.sort((a, b) => a - b);

//   let i = 0;
//   let j = 1;
//   let k = 2;
//   let result = [];
//   console.log(nums);

//   while (i < nums.length - 2) {
//     if (nums[i] + nums[j] + nums[k] === 0 && i !== j && k !== j && i !== k)
//       result.push([nums[i], nums[j], nums[k]]);

//     if (k < nums.length) {
//       k++;
//     } else if (k === nums.length - 1) {
//       j++;
//       k = j + 1;
//     } else {
//       i++;
//       j = i + 1;
//       k = j + 1;
//     }
//   }

//   return result;
// };

// Backtracking
// let threeSum = function(nums) {
//   if (nums.length < 3) {
//     return [];
//   }
//   nums.sort(function(val1, val2) {
//     return val1 > val2 ? 1 : val1 < val2 ? -1 : 0;
//   });
//   console.log(nums);

//   let solution = [];
//   let result = [];
//   let used = [];

//   const backTracking = function(m, n) {
//     if (m == n) {
//       if (solution[0] + solution[1] + solution[2] === 0) {
//         return result.push(solution.slice(0));
//       }
//       return false;
//     } else {
//       let lastNum;
//       for (var i = 0; i < nums.length; i++) {
//         if (used[i]) {
//           continue;
//         }
//         if (lastNum == nums[i]) {
//           continue;
//         }
//         if (m > 0 && solution[m - 1] > nums[i]) {
//           continue;
//         }
//         used[i] = true;
//         lastNum = nums[i];
//         solution[m] = nums[i];
//         arguments.callee(m + 1, n);
//         used[i] = false;
//       }
//     }
//   };

//   backTracking(0, 3);
//   return result;
// };

// console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// https://leetcode.com/problems/count-good-meals/

// let countPairs = function(deliciousness) {
//   if (deliciousness.length < 2) return 0;

//   const isNumberPowerOfTwo = n => {
//     if (n == 0) return false;

//     while (n % 2 == 0) {
//       n = n / 2;
//     }
//     return n === 1;
//   };

//   let i = 0;
//   let j = i + 1;
//   let count = 0;
//   let caches = {};

//   while (i < deliciousness.length - 1) {
//     let sum = deliciousness[i] + deliciousness[j];

//     if (caches.hasOwnProperty(sum) && caches[sum]) {
//       count++;
//     } else {
//       let isPowerOfTwo = isNumberPowerOfTwo(sum);
//       caches[sum] = isPowerOfTwo;
//       if (isPowerOfTwo) count++;
//     }

//     if (j === deliciousness.length - 1) {
//       i++;
//       j = i + 1;
//     } else {
//       j++;
//     }
//   }
//   return count;
// };

// console.log(countPairs([149, 107, 1, 63, 0, 1, 6867]));

// https://leetcode.com/problems/max-number-of-k-sum-pairs/

// function maxOperations(nums, k) {
//   let count = 0;
//   let freq = {};

//   for (let i = 0; i < nums.length; i++) {
//     console.log(freq);
//     if (freq[k - nums[i]]) {
//       if (freq[k - nums[i]] === 1) delete freq[k - nums[i]];
//       else freq[k - nums[i]] = freq[k - nums[i]] - 1;
//       count++;
//     } else {
//       freq[nums[i]] = freq[nums[i]] + 1 || 1;
//     }
//   }
//   return count;
// }

// console.log(maxOperations([1s, 2, 3, 4], 5));
// console.log(maxOperations([3, 1, 3, 4, 3], 7));

// https://leetcode.com/problems/calculate-money-in-leetcode-bank/

let totalMoney = function(n) {
  if (n <= 7)
    return new Array(n + 1).fill(0).reduce((a, b, c) => {
      return a + c;
    }, 0);

  let devide = Math.ceil(n / 7);
  const FIRST_SEVEN_SUM = 28;
  let finalTotal = 0;

  for (let i = 1; i <= devide; i++) {
    if (i === 1) finalTotal = 28;
    else finalTotal = finalTotal + FIRST_SEVEN_SUM + 7 * (i - 1);
  }

  console.log(finalTotal);
};

console.log(totalMoney(8));
console.log(totalMoney(9));
console.log(totalMoney(10));
// console.log(totalMoney(20));

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

const subtractProductAndSum = n => {
  let sum = 0;
  let product = 1;

  while (n > 0) {
    let mod = n % 10;
    sum += mod;
    product *= mod;
    n = Math.floor(n / 10);
  }

  return product - sum;
};

console.log(subtractProductAndSum(4424));

// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

// function numberOfSteps(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   let steps = 0;

//   if (n % 2 !== 0) {
//     n = n - 1;
//     steps = 1;
//   }

//   while (n !== 0) {
//     n = n / 2;
//     steps++;

//     if (n % 2 !== 0) {
//       n = n - 1;
//       steps++;
//     }
//   }

//   return steps;
// }

function numberOfSteps(number, count = 0) {
  console.log(number);
  console.log(count);
  if (number === 0) return count;
  // number >> 1 --- it is similar to number / 2
  return number % 2 === 0
    ? numberOfSteps(number >> 1, (count += 1))
    : numberOfSteps((number -= 1), (count += 1));
}

console.log(numberOfSteps(123));

// https://leetcode.com/problems/xor-operation-in-an-array/

function xorOperation(n, start) {
  let arr = [...new Array(n)];
  let result = arr.map((x, i) => start + 2 * i);
  return result;
}

console.log(xorOperation(10, 5));

// https://leetcode.com/problems/count-of-matches-in-tournament/

function numberOfMatches(n, sum = 0) {
  if (n === 1) return sum;
  return n % 2 !== 0
    ? numberOfMatches((n + 1) / 2, sum + (n - 1) / 2)
    : numberOfMatches(n / 2, sum + n / 2);
}

console.log(numberOfMatches(1));

// https://leetcode.com/problems/maximum-69-number/

function maximum69Number(num) {
  const arr = `${num}`.split('').map(x => Number(x));
  const isSixAvailable = arr.indexOf(6);
  if (isSixAvailable < 0) return num;

  // const result = arr.sort((a, b) => b - a).join('');
  return num
    .toString()
    .split('')
    .map(x => Number(x))
    .join('')
    .replace(/6/, '9');
}

console.log(maximum69Number(9999));
console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9669));
console.log(maximum69Number(6669));

function twoCitySchedCost(costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  let total = 0;
  for (let i = 0; i < costs.length; i++) {
    if (i < costs.length / 2) {
      total += costs[i][0];
    } else {
      total += costs[i][1];
    }
  }

  return total;
}

console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469]
  ])
);
// console.log(twoCitySchedCost([[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]));

// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

function sumZero(n) {
  console.log([...new Array(n - 1).keys()]);
  return [...new Array(n - 1).keys(), 0 - ((n - 1) * (n - 2)) / 2];
  // let devide = Math.floor(n / 2);
  // return [...new Array(n)].map((_, i) => i - devide >= 0 && n % 2 === 0  ? i - devide + 1 : i - devide);
}

console.log(sumZero(5));
console.log(sumZero(4));
// [2,-4,5,-3]

function validTicTacToe(board) {
  const checkCriteria = val => {
    const map = {};
    for (const item of val) {
      map[item] = map[item] + 1 || 1;
    }
    return Object.keys(map).length === 1;
  };

  const checkAllColumnsIsOkay = () => {
    const checkColumns = val => {
      console.log(val);
      const map = {};
      for (const item of val) {
        map[item] = map[item] + 1 || 1;
      }
      return Object.keys(map).length === 1;
    };

    for (let i = 0; i < board.length; i++) {
      let char = '';
      for (let j = 0; j < board.length; j++) {
        char += board[j][i];
      }

      const checkColumn = checkColumns(char);
      if (checkColumn) return true;
    }

    return false;
  };

  // const checkAllRows = checkCriteria(board[0]) || checkCriteria(board[1]) || checkCriteria(board[2]);
  // if (checkAllRows) return false;

  // const checkAllColums = checkAllColumnsIsOkay();
  // if (checkAllColums) return false;

  // const checkDiagonals = checkCriteria(board[0][0] + board[1][1] + board[2][2]) || checkCriteria(board[0][2] + board[1][1] + board[2][0]);
  // if (checkDiagonals) return false;

  const stringBoard = board.join('').replace(/\s/g, '');
  console.log(stringBoard.length);

  // let map = {};
  //  for (const item in stringBoard) {
  //    map[item] = map[item] + 1 || 1;
  //  }

  // if (stringBoard.length === 1 && stringBoard === 'O') return false;

  return true;
}
+console.log(validTicTacToe(['O  ', '   ', '   ']));

// https://leetcode.com/problems/sum-of-digits-in-base-k/

const sumBase = (n, k) => {
  let a = 0;
  while (n) {
    a += Math.trunc(n % k);
    console.log(n);
    n = n / k;
  }
  return a;
};

console.log(sumBase(34, 6));

// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/

function minMoves2(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let resultNumber = Math.trunc(sum / nums.length);

  // return Array(nums.length).fill(resultNumber).reduce((a, b, i) => {
  //   return a+= nums[i] > b ? nums[i] - b : b - nums[i];
  // }, 0);

  let count = 0;
  nums.forEach(x => {
    if (x > resultNumber) {
      count += x - resultNumber;
    } else {
      count += resultNumber - x;
    }
  });

  return count;
}

console.log(minMoves2([1, 0, 0, 8, 6]));
// console.log(minMoves2([1,10,2,9]));

var minMoves23 = function(nums) {
  var c = nums.sort((a, b) => a - b);
  console.log(c);
  let ans = 0,
    median = nums[Math.trunc(nums.length / 2)];
  console.log(median);
  for (let i = 0; i < nums.length; i++) ans += Math.abs(median - nums[i]);

  return ans;
};

console.log(minMoves23([1, 2, 3, 4, 5, 6]));
console.log(~~2.5);
console.log(~~-12.5);
console.log(~~-555.992);

// var fib = function(n) {
//   var newArray = [];
//   var sum = 0;
//   for (var i = 0; i < n; i++) {
//    newArray.push(i);
//   } return newArray;
//  console.log(newArray)
// };

var fib = function(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  if (n === 3) return 2;

  let result = 0;
  let preprev = 0;
  let prev = 1;

  for (let i = 3; i <= n; i++) {
    result = preprev + prev;
    preprev = prev;
    prev = result;
  }
  console.log(result);
  return result;
};
console.log(fib(10));

function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(10));

// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

function minOperations(nums) {
  let ops = 0,
    prevNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= prevNum) {
      ops += prevNum + 1 - nums[i];
      nums[i] = prevNum + 1;
    }
    prevNum = nums[i];
  }
  return ops;

  // if (nums.length <= 0) return [];
  // let max = Math.max(...nums);
  // let index = nums.indexOf(max);
  // let needToIncreaseValFor = nums.length - index - 1;
  // let whatShouldbeValue = max + needToIncreaseValFor;
  // console.log(needToIncreaseValFor);
  // console.log(whatShouldbeValue);

  // let i = 0,
  //   count = 0;
  // while (i < needToIncreaseValFor) {
  //   count += +whatShouldbeValue - nums[nums.length - i - 1] - i;
  //   i++;
  // }

  // return count;
}

console.log(minOperations([7, 4, 2, 8, 1, 7, 7, 10]));
