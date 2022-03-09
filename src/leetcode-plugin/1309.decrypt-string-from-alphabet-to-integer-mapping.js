/*
 * @lc app=leetcode id=1309 lang=javascript
 *
 * [1309] Decrypt String from Alphabet to Integer Mapping
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const map = {};
  for (let i = 1; i <= 26; i++) map[i] = String.fromCharCode(96 + i);

  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      let combination = s[i] + s[i + 1];
      result += map[combination];
      i += 2;
    } else {
      result += map[s[i]];
    }
  }

  return result;
};
// @lc code=end

console.log(freqAlphabets('9'));
console.log(freqAlphabets('10#'));
console.log(freqAlphabets(''));
console.log(freqAlphabets('10#11#12'));
console.log(freqAlphabets('1326#'));
