/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i] > sum) {
      if (max < nums[i]) max = nums[i];
      sum = nums[i];
    } else if (max < sum) {
      max = sum;
    }
  }

  return max;
};
// @lc code=end

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([-1, -2]));
