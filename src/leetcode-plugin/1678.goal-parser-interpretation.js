/*
 * @lc app=leetcode id=1678 lang=javascript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let result = '';
  let i = 0;

  while (i < command.length) {
    if (command[i] === 'G') {
      result += 'G';
    } else if (command[i] === '(' && command[i + 1] === ')') {
      result += 'o';
      i++;
    } else if (command[i] === '(' && command[i + 1] === 'a') {
      result += 'al';
      i + 3;
    }
    i++;
  }
  return result;
};
// @lc code=end

console.log(interpret('G()(al)'));
console.log(interpret('G()(al)G'));
console.log(interpret('G()()()()(al)'));
console.log(interpret('(al)G(al)()()G'));
