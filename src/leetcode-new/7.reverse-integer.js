/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const max = 2147483647;
  const min = -2147483648;
  x = x.toString();
  let i = x.toString().length - 1;
  let result = 0;

  sign = 1;
  while (i >= 0) {
    if (x[i] === '-') {
      sign = -1;
    }

    if (!isNaN(x[i]) && x[i] !== ' ') result = result * 10 + Number(x[i]);
    i--;
  }

  if (result * sign >= max) return 0;
  if (result * sign < min) return 0;
  return result * sign;
};
// @lc code=end

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(21)); // 12
console.log(reverse(120)); // 21

console.log(reverse('  0012  ')); // 12
console.log(reverse('  42  '));
console.log(reverse('42')); // 42
console.log(reverse('    -42')); // 42
