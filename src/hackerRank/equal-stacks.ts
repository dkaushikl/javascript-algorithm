function equalStacks(h1: number[], h2: number[], h3: number[]): number {
  let sum1 = h1.reduce((a, b) => a + b, 0);
  let sum2 = h2.reduce((a, b) => a + b, 0);
  let sum3 = h3.reduce((a, b) => a + b, 0);

  while (h1.length !== 0 || h2.length !== 0 || h3.length !== 0) {
    if (sum1 === sum2 && sum2 === sum3) return sum1;

    if (sum1 >= sum2 && sum1 >= sum3) sum1 = sum1 - h1.shift();
    else if (sum2 >= sum1 && sum2 >= sum3) sum2 = sum2 - h2.shift();
    else if (sum3 >= sum1 && sum3 >= sum2) sum3 = sum3 - h3.shift();
  }

  return 0;
}

console.log(equalStacks([1, 2, 1, 1], [1, 1, 2], [1, 1]));
