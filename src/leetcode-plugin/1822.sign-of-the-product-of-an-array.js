/*
 * @lc app=leetcode id=1822 lang=javascript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  let sum = 1;
  for (const item of nums) {
    if (item === 0) return 0;

    sum *= item < 0 ? -1 : 1 * 1;
  }
  return sum;
};
// @lc code=end

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));
