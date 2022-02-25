const maximumGain = (s: string, x: Number, y: Number) => {
  let maxCount = Number.MIN_SAFE_INTEGER;

  const updateStr = (s, xs, count, sum, dp) => {
    if (dp[s]) {
      return dp[s];
    }

    const idx = s.indexOf(xs);
    if (idx >= 0) {
      const remained = s.substring(0, idx) + s.substring(idx + xs.length);
      backtrack(remained, Number(count) + Number(sum), dp);
    } else {
      maxCount = Math.max(maxCount, count);
      return count;
    }
  };

  const backtrack = (s: string, count, dp = {}) => {
    return Math.max(
      maxCount,
      (dp[s] =
        updateStr(s, 'ba', count, y, dp) + updateStr(s, 'ab', count, x, dp))
    );
  };

  backtrack(s, 0);
  return maxCount;
};

console.log(maximumGain('cdbcbbaaabab', 4, 5));
console.log(maximumGain('aabbaaxybbaabb', 5, 4));
console.log(maximumGain('cdbca', 5, 4));
// console.log(maximumGain('aabbrtababbabmaaaeaabeawmvaataabnaabbaaaybbbaabbabbbjpjaabbtabbxaaavsmmnblbbabaeuasvababjbbabbabbasxbbtgbrbbajeabbbfbarbagha', 8484, 4096));

const numTilePossibilities = s => {
  const result = [];
  let map = {};

  const backtrack = (s, path = []) => {
    if (s.length <= 0) {
      result.push([...path]);
    } else {
      const sets = [...path].join('');

      if (!map[sets] && sets.length > 0) {
        map[sets] = 1;
        result.push([...path]);
      }

      for (let i = 0; i < s.length; i++) {
        console.log(s);
        backtrack(s.slice(1), [...path, s[0]]);
      }
    }
  };

  console.log(map);
  backtrack(s);
  return result;
};

console.log(numTilePossibilities('AAB'));
