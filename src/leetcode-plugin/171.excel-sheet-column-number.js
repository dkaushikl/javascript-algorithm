/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  if (!columnTitle) return 0;
  if (columnTitle.length === 1) return columnTitle.charCodeAt() - 65 + 1;

  columnTitle = columnTitle
    .split('')
    .reverse()
    .join('');

  let result = Infinity;
  for (let i = columnTitle.length; i >= 1; i--) {
    const code = columnTitle[i - 1].charCodeAt() - 65 + 1;
    if (result === Infinity) {
      result = Math.pow(26, i - 1) * code;
    } else {
      if (i - 1 === 0) result = result + code;
      else result += Math.pow(26, i - 1) * code;
    }
  }
  return result;
};
// @lc code=end

// console.log(titleToNumber("B"));
// console.log(titleToNumber("Y"));
// console.log(titleToNumber("Z"));
// console.log(titleToNumber('AB'));
console.log(titleToNumber(''));
console.log(titleToNumber('ABC'));
console.log(titleToNumber('ZAB'));
console.log(titleToNumber('ZABD'));
console.log(titleToNumber('FXSHRXW'));
