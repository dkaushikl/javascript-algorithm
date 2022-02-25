const findTheDifference = (s, t) => {
  if (s === '') return t;
  const map = {};

  for (const char of s) {
    map[char] = map[char] + 1 || 1;
  }

  for (const char of t) {
    if (!map[char]) return char;
    map[char]--;
    if (map[char] === 0) {
      delete map[char];
    }
  }
};

console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference('', 'y'));
console.log(findTheDifference('a', 'aa'));
