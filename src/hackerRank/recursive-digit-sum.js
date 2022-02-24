const superDigit = (n, k) => {
  let p = (
    n
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0) * k
  ).toString();
  return p.length > 1 ? superDigit(p, 1) : p;
};

// console.log(superDigit(`9875987598759875`, 4));
console.log(superDigit('148', 3));
// console.log(superDigit(123, 3));
// console.log(superDigit(9875987598759875987598759875987598759875));
