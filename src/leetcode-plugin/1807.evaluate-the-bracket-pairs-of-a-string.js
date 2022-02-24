/*
 * @lc app=leetcode id=1807 lang=javascript
 *
 * [1807] Evaluate the Bracket Pairs of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = {};
  for (const item of knowledge) {
    map[item[0]] = item[1];
  }

  var newTxt = s.split('(');
  let result = '';
  for (var i = s[0] === ' ' ? 1 : 0; i < newTxt.length; i++) {
    let idx = newTxt[i].indexOf(')');
    if (idx === -1) {
      result += newTxt[i];
    } else {
      if (map[newTxt[i].slice(0, idx)]) {
        newTxt[i] = map[newTxt[i].slice(0, idx)] + newTxt[i].slice(idx + 1);
      } else {
        newTxt[i] = '?' + newTxt[i].slice(idx + 1);
      }
      result += newTxt[i];
    }
  }
  return result;
};
// @lc code=end

console.log(
  evaluate('(name)is(age)yearsold', [
    ['name', 'bob'],
    ['age', 'two']
  ])
);
console.log(
  evaluate('hi(nam)', [
    ['name', 'bob'],
    ['age', 'two']
  ])
);
