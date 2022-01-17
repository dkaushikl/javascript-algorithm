const lengthOfLastWord = function(s) {
  let total = 0;
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt();
    if (
      (charCode >= 97 && charCode < 123) ||
      (charCode >= 65 && charCode < 91) ||
      (charCode >= 48 && charCode < 58)
    ) {
      sum += 1;
    } else {
      if (sum !== 0) total = sum;
      sum = 0;
    }
  }
  if (sum !== 0) total = sum;
  return total;
};

console.log(lengthOfLastWord('today is nice day'));
