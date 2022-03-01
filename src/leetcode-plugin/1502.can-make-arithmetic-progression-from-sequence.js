/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);

  let diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++)
    if (diff !== arr[i] - arr[i - 1]) return false;

  return true;
};
// @lc code=end

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
