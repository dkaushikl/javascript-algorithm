/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const map = {};
  for (const char of s) map[char] = map[char] + 1 || 1;

  for (const char of t) {
    if (!(char in map)) return char;

    map[char]--;
    if (map[char] === 0) delete map[char];
  }

  return -1;
};
// @lc code=end

// console.log(findTheDifference('abcd', 'abcde'));
// console.log(findTheDifference('', 'y'));
console.log(findTheDifference('a', 'aa'));
