var freqAlphabets = function(s) {
  let map = {};

  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = i + 1;
    map[i + 1] = String.fromCharCode(97 + i);
  }

  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      result += map[String(s[i]) + String(s[i + 1])];
      i = i + 2;
    } else {
      result += map[String(s[i])];
    }
  }
  return result;
};

console.log(freqAlphabets('10#11#12'));
console.log(freqAlphabets('1326#'));
console.log(freqAlphabets('25#'));
console.log(
  freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#')
);
