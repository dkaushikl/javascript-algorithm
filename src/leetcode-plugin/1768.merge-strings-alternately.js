/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let i = 0;
  let j = 0;
  let result = '';
  while (i < word1.length && j < word2.length) {
    if ((i + j) % 2 === 0) {
      result += word1[i];
      i++;
    } else {
      result += word2[j];
      j++;
    }
  }

  while (i < word1.length) {
    result += word1[i];
    i++;
  }

  while (j < word2.length) {
    result += word2[j];
    j++;
  }

  return result;
};
// @lc code=end

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));
console.log(mergeAlternately('abcd', ''));
console.log(mergeAlternately('', 'abcd'));
