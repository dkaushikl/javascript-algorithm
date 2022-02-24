var countHomogenous = function(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    total += 1;

    let j = i + 1;
    while (s[i] === s[j]) {
      total += 1;
      j++;
    }
  }

  return total;
};

console.log(countHomogenous('abbcccaa'));
console.log(countHomogenous('xy'));
console.log(countHomogenous('zzzzz'));
console.log(countHomogenous('bbbaa'));
console.log(countHomogenous('aa'));
