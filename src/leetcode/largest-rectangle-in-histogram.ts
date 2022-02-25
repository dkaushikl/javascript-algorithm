const largestRectangleArea = heights => {
  if (heights.length === 0) return [];

  let result = heights[0];
  let max = heights[0];
  let min = heights[0];

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] > max && max + max > heights[i]) {
      result = Math.max(max + max, result);
    } else {
      result = Math.max(heights[i], result);
    }

    if (heights[i] < min) min = heights[i];

    if (heights[i] > max) max = heights[i];
  }

  return result;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([4, 2]));
console.log(largestRectangleArea([2]));
console.log(largestRectangleArea([]));
console.log(largestRectangleArea([6, 7, 5, 8]));

function steadyGene(gene) {
  const map = {};
  let modulo = gene.length / 4;

  let count = 0;
  for (let char of gene) {
    if (char in map) {
      if (map[char] === modulo) {
        count++;
      } else {
        map[char] += 1;
      }
    } else {
      map[char] = 1;
    }
  }
  return count;
}

console.log(steadyGene('GAAATAAA'));
console.log(steadyGene('ATCGAAAG'));

function getFinalOpenedDoors(numDoors) {
  const arr = new Array(numDoors + 1).fill(false);

  for (let i = 1; i < numDoors; i++) {
    for (let j = 1; j < numDoors; j += i) {
      arr[j] = !arr[j];
    }
  }

  arr.shift();
  const result = [];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i]) result.push(i);
  }
  return result;
}

console.log(getFinalOpenedDoors(100));

function solve24(numStr) {
  const backtrack = () => {
    return backtrack();
  };
}

console.log(solve24('4878'));

const permute = (str, prefix) => {
  if (str.length === 0) {
    console.log(prefix);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let rem = str.substring(0, i) + str.substring(i + 1);
    console.log(rem);
    permute(rem, prefix + str[i]);
  }
};

console.log(permute('abc', ''));

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const backtrack = (str, dp = {}) => {
    if (str === '') return true;

    if (str in dp) return dp[str];

    for (let i = 0; i < wordDict.length; i++) {
      const idx = str.indexOf(wordDict[i]);

      if (idx === 0) {
        const remained = str.substring(wordDict[i].length);
        if (backtrack(remained, dp)) return true;
      }
    }

    dp[str] = false;
    return false;
  };

  return backtrack(s);
};

// console.log(wordBreak('leetcode', ["leet", "code"]));
// console.log(wordBreak('kaushikleetcodedhameliyakaushikdhameliya', ["leet", "code", 'kaushik', 'dhameliya']));
// console.log(wordBreak('applepenapple', ["apple", "pen"]));
// console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]));

const integerReplacement = function(n, cache = new Map([[1, 0]])) {
  if (cache.has(n)) {
    return cache.get(n);
  }

  const result =
    n % 2 === 0
      ? integerReplacement(n / 2) + 1
      : Math.min(integerReplacement(n - 1), integerReplacement(n + 1)) + 1;

  cache.set(n, result);
  return result;
};

// console.log(integerReplacement(8));
// console.log(integerReplacement(7));
// console.log(integerReplacement(4));
// console.log(integerReplacement(25));
console.log(integerReplacement(2147483647));

var fib = function(n, dp = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n in dp) return dp[n];
  return (dp[n] = fib(n - 1, dp) + fib(n - 2, dp));
};

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(30));

var tribonacci = function(n, dp = {}) {
  if (n in dp) return dp[n];

  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  return (dp[n] =
    tribonacci(n - 3, dp) + tribonacci(n - 2, dp) + tribonacci(n - 1, dp));
};

console.log(tribonacci(4));
console.log(tribonacci(3));
console.log(tribonacci(2));
console.log(tribonacci(11));

var climbStairs = function(n, dp = {}) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n in dp) return dp[n];

  return (dp[n] = climbStairs(n - 1, dp) + climbStairs(n - 2, dp));
};

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(10));

var minCostClimbingStairs = function(cost) {
  const backtrack = cost => {
    if (cost.length <= 0) return 0;

    return Math.min(
      cost[0] + backtrack(cost.slice(2)),
      cost[1] + backtrack(cost.slice(3))
    );
  };

  return backtrack(cost);
};

console.log(minCostClimbingStairs([10, 15, 20]));
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

var rob = function(nums) {
  let recur = function(i) {
    console.log(i);
    if (i == 0) return nums[0];

    if (i == 1) return Math.max(nums[1], nums[0]);

    return Math.max(nums[i] + recur(i - 2), recur(i - 1));
  };

  return recur(nums.length - 1);
};

// console.log(rob([1, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
// console.log(rob([1, 2, 3, 1]));

// console.log(rob([226, 174, 214, 16, 218, 48, 153, 131, 128, 17, 157, 142, 88, 43, 37, 157, 43, 221, 191, 68, 206, 23, 225, 82, 54, 118, 111, 46, 80, 49, 245, 63, 25, 194, 72, 80, 143, 55, 209, 18, 55, 122, 65, 66, 177, 101, 63, 201, 172, 130, 103, 225, 142, 46, 86, 185, 62, 138, 212, 192, 125, 77, 223, 188, 99, 228, 90, 25, 193, 211, 84, 239, 119, 234, 85, 83, 123, 120, 131, 203, 219, 10, 82, 35, 120, 180, 249, 106, 37, 169, 225, 54, 103, 55, 166, 124]));

var addSpaces = function(s, spaces) {
  if (spaces.length <= 0) return s;
  const result = [];
  spaces.sort((a, b) => a - b);
  result.push(s.substring(0, spaces[0]));
  for (var i = 1; i < spaces.length; i++)
    result.push(s.substring(spaces[i - 1], spaces[i]));

  result.push(s.substring(spaces[i - 1]));

  return result.join(' ').trimEnd();
};

console.log(addSpaces('LeetcodeHelpsMeLearn', [8, 13, 15]));
console.log(addSpaces('spacing', [0, 1, 2, 3, 4, 5, 6]));
console.log(addSpaces('icodeinpython', [1, 5, 7, 9]));
console.log(addSpaces('i', [1]));
console.log(addSpaces('i', [0]));
console.log(addSpaces('ai', []));

var isPossibleDivide = function(nums, k) {
  if (nums.length % k !== 0) return false;

  nums.sort((a, b) => a - b);
  console.log(nums);

  let i = nums.length - 2;
  let j = 0;
  while (nums.length !== 0) {
    console.log(nums);
    if (nums[i + 1] - nums[i] === 1) {
      console.log(nums);
      j++;
      if (j === k - 1) {
        nums.pop();
        // nums.pop();
        i = nums.length - 2;
        j = 0;
        console.log(nums);
        continue;
      } else {
        while (nums[i - 1] === nums[i]) {
          i--;
        }
        i--;
        nums.pop();
      }
    } else {
      console.log(i);
      return false;
    }
  }

  return true;
};

console.log(isPossibleDivide([1, 2, 3, 4], 3));
console.log(isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3));

var longestIncreasingPath = function(matrix) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  // const dfs = (i, j) => {
  //   console.log(i, j);
  //   if (i < 0 || j < 0 || i >= matrix.length - 1 || j >= matrix[0].length - 1) {
  //     return;
  //   }

  //   for (let k = 0; k < directions.length; k++) {
  //     dfs(directions[k][0] + i, directions[k][1] + j);
  //   }
  // }

  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     dfs(i, j);
  //   }
  // }
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
  ])
);

const findAverage = (k, arr) => {
  const result = [];
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element
    windowSum += arr[windowEnd];

    // checks whether windowEnd hit k numbers of element.
    if (windowEnd >= k - 1) {
      // calculate average and store into result according to windowStart
      result[windowStart] = windowSum / k;

      // subtract the already added element
      windowSum -= arr[windowStart];

      // slide the next window
      windowStart++;
    }
  }

  return result;
};

console.log(findAverage(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));

const findMaxSumSubArray = (k, arr) => {
  let result = Number.MIN_SAFE_INTEGER;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      result = Math.max(windowSum, result);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
};

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2]));
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]));

const smallestSubArrayWithGivenSum = (k, arr) => {
  let minLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add next element
    windowSum += arr[windowEnd];

    // run loop until windowSum is less than k and to find out smallest number of slides
    while (windowSum >= k) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) return 0;

  return minLength;
};

console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 3, 2]));
console.log(smallestSubArrayWithGivenSum(7, [2, 1, 5, 2, 8]));
console.log(smallestSubArrayWithGivenSum(8, [3, 4, 1, 1, 6]));

const findLength = (str, k) => {
  let windowStart = 0;
  let maxLength = 0;
  const map = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    map[rightChar] = map[rightChar] + 1 || 1;

    while (Object.keys(map).length > k) {
      const leftChar = str[windowStart];
      map[leftChar] -= 1;

      if (map[leftChar] === 0) delete map[leftChar];

      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

console.log(findLength('araaci', 2));
