const fib = (n: number, memo = {}) => {
  if (memo[n]) return memo[n];

  if (n <= 1) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(32));
console.log(fib(45));
console.log(fib(50));
console.log(fib(55));
console.log(fib(60));
