// const factorial = (n) => {
//     if (n === 1) return 1;
//     return factorial(n) * factorial(n - 1);
// }

const factorial = n => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= i + 1;
  }
  return result;
};

console.log(factorial(5));
