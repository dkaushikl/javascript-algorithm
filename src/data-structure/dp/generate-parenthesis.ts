const generateParenthesis = n => {
  const result = [];
  const backtrack = (open, close, s = '') => {
    if (s.length === n * 2) {
      result.push(s);
      return;
    }

    if (open < n) backtrack(open + 1, close, s + '(');

    if (close < open) backtrack(open, close + 1, s + ')');
  };

  backtrack(0, 0);
  return result;
};

console.log(generateParenthesis(3));
