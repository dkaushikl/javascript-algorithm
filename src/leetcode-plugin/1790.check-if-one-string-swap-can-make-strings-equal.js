/*
 * @lc app=leetcode id=1790 lang=javascript
 *
 * [1790] Check if One String Swap Can Make Strings Equal
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) return true;
  const charSwitched = [];
  let onePass = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i] && charSwitched.length === 0) {
      charSwitched.push([s1[i], s2[i]]);
    } else if (s1[i] !== s2[i] && charSwitched.length === 1 && !onePass) {
      if (charSwitched[0][1] !== s1[i] || charSwitched[0][0] !== s2[i])
        return false;
      onePass = true;
    } else if (onePass && s1[i] !== s2[i]) {
      return false;
    }
  }
  return onePass;
};
// @lc code=end

console.log(areAlmostEqual('baaa', 'abbb'));

// console.log(areAlmostEqual('bank', 'kanb'));
// console.log(areAlmostEqual('attack', 'defend'));
// console.log(areAlmostEqual('kelb', 'kelb'));
// console.log(areAlmostEqual('pelk', 'klep'));
// console.log(areAlmostEqual('kabc', 'akcb'));
// console.log(areAlmostEqual('aa', 'ac'));
// console.log(areAlmostEqual('aa', 'aa'));
