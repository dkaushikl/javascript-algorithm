var maxPower = function(s) {
  if (s.length === 1) return 1;
  let max = Number.MIN_SAFE_INTEGER;
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      max = Math.max(count, max);
      count = 1;
    } else {
      count++;
    }
  }
  max = Math.max(count, max);
  return max;
};

console.log(maxPower('abbcccddddeeeeedcba'));
console.log(maxPower('leetcode'));
console.log(maxPower('cc'));
