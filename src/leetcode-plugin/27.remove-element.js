/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if (nums[l] !== val) {
      l++;
    } else if (nums[r] === val) {
      r--;
    } else {
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }
  }
  return l;
};
// @lc code=end

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
