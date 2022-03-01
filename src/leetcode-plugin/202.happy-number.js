/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const map = {};
  while (!map[n]) {
    map[n] = true;
    let sum = 0;

    while (n > 0) {
      const item = n % 10;
      sum += item * item;
      n = Math.floor(n / 10);
    }

    if (sum === 1) return true;
    n = sum;
  }

  return false;
};
// @lc code=end

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(1));
console.log(isHappy(7));
console.log(isHappy(1999999999));
