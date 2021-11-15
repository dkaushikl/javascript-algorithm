const isAnagram = (s, t) => {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  t = t.toLowerCase().replace(/[\W_]/g, '');

  if (s.length !== t.length) return false;
  const map = {};

  for (const c of s) {
    map[c] ? map[c]++ : (map[c] = 1);
  }

  for (const c of t) {
    if (map[c]) {
      map[c]--;
      if (map[c] < 0) return false;
    } else {
      return false;
    }
  }

  return true;
};

// console.log(isAnagram('ab', 'a'));
console.log(isAnagram('ab', 'bc'));
