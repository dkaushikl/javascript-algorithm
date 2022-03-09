/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.arr = [0];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      this.arr.push(nums[i]);
    } else this.arr.push(nums[i] + this.arr[this.arr.length - 1]);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.arr[right + 1] - this.arr[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // return (-2) + 0 + 3 = 1
console.log(numArray.sumRange(2, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(1, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(3, 5)); // return 3 + (-5) + 2 + (-1) = -1
console.log(numArray.sumRange(0, 5)); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

console.log(-1 - -2);
