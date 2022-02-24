// 12. Integer to Roman
// Given an integer, convert it to a roman numeral.

var intToRoman = function(num) {
  let roman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };
  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let i = 0;
  let result = '';

  if (roman[num]) return roman[num];

  while (num > 0) {
    if (num >= nums[i]) {
      let modulo = num % nums[i];
      let devide = num / nums[i];
      for (let j = 0; j < parseInt(devide); j++) {
        result += roman[nums[i]];
      }
      num = modulo;
    }
    i++;
  }
  return result;
};

console.log(76 % 50); // 'L'
console.log(26 % 20); // 'XX'
console.log(6 % 5); // 'V'
console.log(1 % 1); // 'I'

// Five test cases to run function on

console.log(intToRoman(1)); // I
console.log(intToRoman(2)); // II
console.log(intToRoman(3)); // III
console.log(intToRoman(4)); // IV
console.log(intToRoman(5)); // V
console.log(intToRoman(6)); // VI
console.log(intToRoman(7)); // VII
console.log(intToRoman(8)); // VIII
console.log(intToRoman(9)); // IX
console.log(intToRoman(10)); // X
console.log(intToRoman(12)); // XII
console.log(intToRoman(66)); // LXVI
console.log(intToRoman(80)); // LXXX
console.log(intToRoman(20)); // XX
console.log(intToRoman(40)); // XX
console.log(intToRoman(76)); // LXXVI
console.log(intToRoman(4)); // IV
console.log(intToRoman(9)); // IX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
