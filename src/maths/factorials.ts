function factorial(n) {
  let result = 1;
  for (let index = 1; index <= n; index += 1) {
    result *= index;
  }

  return result;
}

function factorialRecursive(n, r = 1) {
  if (n === 1) {
    console.log(r);
  } else {
    factorialRecursive(n - 1, r * n);
  }
}

factorial(15);
factorialRecursive(15);
