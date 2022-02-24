var countGoodSubstrings = function(s) {
  if (s.length < 3) return 0;

  let count = 0;
  let i = 2;
  while (i < s.length) {
    if (s[i] !== s[i - 1] && s[i] !== s[i - 2] && s[i - 1] !== s[i - 2]) {
      count++;
    }
    i++;
  }
  return count;
};
console.log(countGoodSubstrings('xyzzaz'));
console.log(countGoodSubstrings('aababcabc'));
