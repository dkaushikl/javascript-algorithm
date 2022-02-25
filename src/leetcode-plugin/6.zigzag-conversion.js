// https://leetcode.com/problems/zigzag-conversion/discuss/3522/Intuitive-Javascript-Solution

var convert = function(s, numRows) {
  if (numRows === 1) return s;

  const rows = Array(numRows);
  for (let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  let count = 0;
  let reverse = false;

  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i]);

    reverse ? count-- : count++;
    if (count === numRows - 1 || count === 0) {
      reverse = !reverse;
    }
  }

  return rows.reduce((a, b) => a + b.join(''), '');
};

console.log(convert('KAUSHIK', 3)); // "PAHNAPLSIIGYIR"
console.log(convert('AB', 1)); // "PAHNAPLSIIGYIR"
