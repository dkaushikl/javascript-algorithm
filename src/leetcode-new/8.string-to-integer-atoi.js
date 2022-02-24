var myAtoi = function(s) {
  let MAX_RANGE = Math.pow(2, 31) - 1;
  let MIN_RANGE = -Math.pow(2, 31) + 1;

  s = s.trim();

  let i = 0;
  let result = 0;
  let sign = s[0] === '+' ? 1 : s[0] === '-' ? -1 : 1;

  if (s[i] === '+' || s[i] === '-') i++;
  if ((i === 1 && s[i] === '+') || s[i] === '-') return 0;

  while (s[i] === '0') {
    i++;
  }

  while (s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + +s[i];
    if (result > MAX_RANGE) return sign === 1 ? MAX_RANGE : MIN_RANGE - 1;
    i++;
  }

  return result * sign;
};
console.log(myAtoi('  0012  ')); // 12
console.log(myAtoi('  42  '));
console.log(myAtoi('42')); // 42
console.log(myAtoi('    -42')); // 42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('-91283472332')); // -2147483648
console.log(myAtoi('91283472332')); // 2147483648
console.log(myAtoi('+-12')); // 0
console.log(myAtoi('+12-')); // 12
console.log(myAtoi('+234kaushik-45 -4')); // 234
