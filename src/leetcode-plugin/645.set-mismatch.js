/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums1 = function(nums) {
  let similarNum = -1;
  let sum = 0;
  let total = 0;

  for (let i = 1; i <= nums.length; i++) {
    sum += nums[i - 1];
    total += i;
    if (nums[i] === nums[i - 1]) {
      similarNum = nums[i];
    }
  }

  return [similarNum, total - (sum - similarNum)];
};

var findErrorNums = function(nums) {
  let sum = nums.reduce((a, b) => b + a, 0);
  let total = nums.reduce((a, b, i) => i + 1 + a, 0);
  let similarNum = nums.filter(x => nums.filter(y => y === x).length > 1);
  return [similarNum[0], total - (sum - similarNum[0])];
};
// @lc code=end

// var startTime = performance.now()
// console.log(findErrorNums([1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));
// var endTime = performance.now()
// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

// console.log(findErrorNums([1, 1, 2]));
// console.log(findErrorNums([1, 2, 2]));
// console.log(findErrorNums([1, 3, 3, 4]));
console.log(findErrorNums([1, 2, 2, 4]));
