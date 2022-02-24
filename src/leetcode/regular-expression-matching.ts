var isMatch = function(s, p) {
  const filter = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      filter[filter.length - 1][1] = true;
    } else {
      filter.push([p[i], false]);
    }
  }
  p = filter;

  const recursive = (i, j) => {
    if (p.length === j) return i === s.length;

    if (p[j][1]) {
      if (recursive(i, j + 1)) return true;

      if (i < s.length && (s[i] === p[j][0] || p[j][0] === '.'))
        return recursive(i + 1, j);
    } else {
      if ((i < s.length && p[j][0] === s[i]) || p[j][0] === '.')
        return recursive(i + 1, j + 1);
    }
    return false;
  };

  return recursive(0, 0);
};

// console.log(isMatch('aab', 'c*a*b'));
// console.log(isMatch('aab', 'c*ab'));
// console.log(isMatch('mississippi', 'mis*is*p*.'));
// console.log(isMatch('ab', '.*c'));
