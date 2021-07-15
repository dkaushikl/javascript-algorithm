function fibonacci(n) {
  let result = [];
  for (let index = 0; index < n; index += 1) {
    result.push(
      index === 0 || index === 1 ? index : result[index - 2] + result[index - 1]
    );
  }
  console.log(result);
}

function fibonacciRecursive(n, i = 0, r = []) {
  if (i === n) {
    console.log(r.reduce((a, b) => a + b, 0));
  } else {
    r.push(i === 0 || i === 1 ? i : r[i - 2] + r[i - 1]);
    fibonacciRecursive(15, i + 1, r);
  }
}

fibonacci(15);
fibonacciRecursive(15);
