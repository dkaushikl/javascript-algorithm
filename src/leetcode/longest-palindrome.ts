var longestPalindrome = function(s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  let divideCount = 0;
  let evenCount = 0;
  for (const item in map) {
    if (Number(map[item]) % 2 !== 0) {
      divideCount += Math.floor(Number(map[item]) / 2);
    } else {
      evenCount += Number(map[item]);
    }
  }
  return evenCount === s.length ? s.length : evenCount + divideCount * 2 + 1;
};

console.log(longestPalindrome('aaaaaa'));
// console.log(longestPalindrome('abfzmbbbbffffffccccdd'));
console.log(longestPalindrome('abbbb'));
