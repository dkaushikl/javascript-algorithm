// 13. Roman to Integer
// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i + 1]] > map[s[i]]) {
      result += map[s[i + 1]] - map[s[i]];
      i++;
    } else if (map[s[i]]) {
      result += map[s[i]];
    }
  }
  return result;
};

// Three test cases to run function on
console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('LVIII')); //58
console.log(romanToInt('IX')); // 9
console.log(romanToInt('IV')); // 4
console.log(romanToInt('III')); // 3
console.log(romanToInt('II')); // 2
console.log(romanToInt('XII')); // 12
console.log(romanToInt('XCII')); // 92
console.log(romanToInt('V')); // 5
console.log(romanToInt('LV')); // 55
console.log(romanToInt('LXXX')); // 80
console.log(romanToInt('MMMCMLXXXIX')); // 3989
