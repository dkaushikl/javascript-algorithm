/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  t = t.toLowerCase().replace(/[\W_]/g, '');

  if (s.length !== t.length) return false;
  const map = {};

  for (const c of s) {
    map[c] ? map[c]++ : (map[c] = 1);
  }

  for (const c of t) {
    if (map[c]) {
      map[c]--;
      if (map[c] < 0) return false;
    } else {
      return false;
    }
  }

  return true;
};
// @lc code=end
