const isAnagram = (s, t) => {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  t = t.toLowerCase().replace(/[\W_]/g, '');
  if (s.length !== t.length) return false;
  const map = s.split('').reduce((a, b) => {
    if (a[b]) a[b] += 1;
    else a[b] = 1;
    return a;
  }, {});

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

console.log(isAnagram('anagram', 'nagaram'));
