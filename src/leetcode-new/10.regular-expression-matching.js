var isMatch = function(s, p) {
  const temp = [];

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      temp[temp.length - 1][1] = true;
    } else {
      temp.push([p[i], false]);
    }
  }

  p = temp;

  const recursive = (i, j) => {
    if (p.length === j) return i === s.length;

    if (p[j][1]) {
      if (recursive(i, j + 1)) return true;

      if (i < s.length) return recursive(i + 1, j);
    } else {
      if (i < s.length && (p[j][0] === s[i] || p[j][0] === '.'))
        return recursive(i + 1, j + 1);
    }
    return false;
  };

  return recursive(0, 0);
};

console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('ab', '.*')); // true
