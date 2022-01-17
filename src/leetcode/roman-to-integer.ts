const romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char] && map[s[i + 1]] > map[char]) {
      sum += map[s[i + 1]] - map[char];
      i++;
    } else if (map[char]) {
      sum += map[char];
    }
  }

  return sum;
};

console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('IX'));
console.log(romanToInt('IV'));
console.log(romanToInt('III'));
console.log(romanToInt('II'));
console.log(romanToInt('XII'));
console.log(romanToInt('XCII'));
console.log(romanToInt('V'));
console.log(romanToInt('LV'));
console.log(romanToInt('MMMCMLXXXIX'));
