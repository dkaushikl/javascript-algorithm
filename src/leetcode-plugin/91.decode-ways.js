/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const dfs = (i, dp = { [s.length]: 1 }) => {
    if (i in dp) return dp[i];
    if (s[i] === '0') return 0;

    res = dfs(i + 1);

    if (
      i + 1 < s.length &&
      (s[i] === '1' || s[i] === '2') &&
      '0123456'.includes(s[i + 1])
    )
      res += dfs(i + 2);

    dp[i] = res;
    return res;
  };

  return dfs(0);
};
// @lc code=end

console.log(numDecodings('12'));
// console.log(numDecodings('1212'));

// 1 2 1 2
// 12 12
// 1 21 2
// 12 1 2
// 1 2 12
