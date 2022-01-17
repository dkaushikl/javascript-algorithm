let wordPattern = (pattern, s) => {
  const arr = s.split(' ');
  if (pattern.length !== arr.length) return false;

  const map = {};
  const map2 = {};
  let i = 0;
  while (i < pattern.length) {
    if (map[pattern[i]] && map[pattern[i]] !== arr[i]) {
      return false;
    }

    if (map2[arr[i]] && map2[arr[i]] !== pattern[i]) {
      return false;
    }

    map[pattern[i]] = arr[i];
    map2[arr[i]] = pattern[i];
    i++;
  }
  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog cat cat fish'));
console.log(wordPattern('aaaa', 'dog cat cat dog'));
console.log(wordPattern('abba', 'dog dog dog dog'));
console.log(wordPattern('aaaa', 'dog dog dog dog'));
