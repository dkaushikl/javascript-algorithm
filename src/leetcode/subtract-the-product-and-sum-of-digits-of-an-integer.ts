var subtractProductAndSum = function(n) {
  let sum = 0;
  let productOfDigit = 1;

  while (n > 0) {
    let mod = n % 10;
    sum += mod;
    productOfDigit *= mod;
    n = Math.floor(n / 10);
  }

  return productOfDigit - sum;

  // let str = String(n);
  // let sum = 0;
  // let productOfDigit = 1;
  // for (let i = 0; i < str.length; i++) {
  //   productOfDigit *= parseInt(str[i]);
  //   sum += parseInt(str[i]);
  // }
  // return productOfDigit - sum;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(59999));
console.log(subtractProductAndSum(99999));
console.log(subtractProductAndSum(100000));
console.log(subtractProductAndSum(114));
