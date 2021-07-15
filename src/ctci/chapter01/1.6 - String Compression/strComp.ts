// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3, If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z)

const compress = (s: string | any[]) => {
  let compressed = '';
  let previous = s[0];
  let count = 0;

  for (const item of s)
    if (previous !== item) {
      compressed += count === 1 ? previous : previous + count;
      previous = item;
      count = 1;
    } else count++;

  return (compressed += previous + count);
};

console.log(compress('aabcccccaaa'));
console.log(compress('aabbccc'));
console.log(compress('abbbbbbbbbbbb'));
console.log(compress('aaabbaa'));
