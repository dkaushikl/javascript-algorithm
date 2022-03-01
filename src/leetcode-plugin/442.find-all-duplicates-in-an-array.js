/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let i = 0;
  let result = [];
  while (i < nums.length) {
    if (i + 1 === nums[i]) {
      i++;
    } else if (nums[i] > i + 1) {
      let temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
      i++;
    } else {
      result.push(nums[i]);
      i++;
    }
  }
  return nums;
};
// @lc code=end

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
