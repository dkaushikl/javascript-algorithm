var addDigits = function(num) {
  let str = String(num);
  if (str.length === 1) return str;
  let sum = 0;
  let i = 0;
  while (i < str.length) {
    sum += parseInt(str[i]);
    i++;
  }
  return addDigits(sum);
};

console.log(addDigits(38));
