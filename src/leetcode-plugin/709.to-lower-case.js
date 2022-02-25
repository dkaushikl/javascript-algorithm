/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase1 = function(s) {
  return s.toLowerCase();
};

var toLowerCase = function(str) {
  str = str.split('');
  for (const item in str) {
    const charCode = str[item].charCodeAt();
    if (charCode >= 65 && charCode <= 90)
      str[item] = String.fromCharCode(charCode + 32);
  }
  return str.join('');
};

// @lc code=end
console.log(toLowerCase('Hello'));
