const reversePrefix = function(word, ch) {
  const i = word.indexOf(ch);
  let split = word.substr(0, i + 1);
  const split2 = word.substr(i + 1, word.length);
  split = split
    .split('')
    .reverse()
    .join('');
  return split + split2;
};

console.log(reversePrefix('abcdefd', 'd'));
console.log(reversePrefix('xyxzxe', 'z'));
console.log(reversePrefix('abcdefd', 'z'));
