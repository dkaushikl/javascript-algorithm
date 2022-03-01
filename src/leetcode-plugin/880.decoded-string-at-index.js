/*
 * @lc app=leetcode id=880 lang=javascript
 *
 * [880] Decoded String at Index
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// JAVASCRIPT HEAP MEMORY ISSUE IN LEETCODE HOWEVER WORKING FINE LOCALLY
var decodeAtIndex = function(s, k) {
  let result = '';
  let i = 0;
  while (result.length <= k) {
    if (s[i] >= 1 && s[i] <= 9) {
      result += result.repeat(s[i] - 1);
    } else {
      result += s[i];
    }
    i++;
  }
  return result[k - 1];
};

var decodeAtIndex1 = (s, K) => {
  const isNum = char => {
    return char >= 0 && char <= 9;
  };

  // if current index is number then multiple string otherwise increase one number
  const lens = [isNum(s[0]) ? 0 : 1];
  for (let i = 1; i < s.length; i++) {
    const char = s[i];
    if (isNum(char)) {
      lens.push(lens[i - 1] * char);
    } else {
      lens.push(lens[i - 1] + 1);
    }
  }

  // IDK what this code does. I have copy-pasted from leetcode. did many try but cound not understand.
  for (let i = s.length - 1; i >= 0; i--) {
    K %= lens[i];
    console.log(lens[i]);
    console.log(K);
    if (K === 0 && !isNum(s[i])) return s[i];
  }
};
// @lc code=end

// console.log(decodeAtIndex1('leet2code3', 10));
console.log(decodeAtIndex1('ha22', 5));
// console.log(decodeAtIndex1('a2345678999999999999999', 1));
// console.log(decodeAtIndex1('y959q969u3hb22odq595', 222280369));
