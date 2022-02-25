const superDigit = (n, k) => {
  if (`${n}`.length <= 1) return n;

  const newNumber =
    n
      .toString()
      .split('')
      .reduce((a, b) => Number(a) + Number(b), 0) * k;
  return superDigit(newNumber.toString(), 1);
};

console.log(superDigit('9875', 4));
