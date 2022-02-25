// sliding window approach

var lengthOfLongestSubstring = function(s) {
  let max = '';
  let curr = '';

  for (let i = 0; i < s.length; i++) {
    if (curr.includes(s[i])) {
      const idx = curr.indexOf(s[i]);
      curr = curr.substr(idx + 1) + s[i];
    } else {
      curr += s[i];
    }
    if (max.length < curr.length) max = curr;
  }

  return max.length;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

// Hashmap

var lengthOfLongestSubstring1 = function(s) {
  let map = {},
    max = 0,
    i = 0;
  for (var j = 0; j < s.length; j++) {
    if (map[s[j]] === undefined) map[s[j]] = j;
    else {
      max = Math.max(max, j - i);
      i = Math.max(i, map[s[j]] + 1);
      map[s[j]] = j;
    }
  }
  max = Math.max(max, j - i);
  return max;
};

console.log(lengthOfLongestSubstring1('abcabcbb'));
// console.log(lengthOfLongestSubstring1('bbbbb'));
// console.log(lengthOfLongestSubstring1('pwwkew'));
