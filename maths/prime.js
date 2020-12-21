const prompt = require('prompt');

function isPrime(n) {
  let result = true;
  if (n % 1 !== 0) {
    result = false;
    return result;
  }

  if (n <= 1) {
    result = false;
    return result;
  }

  if (n <= 3) {
    return result;
  }

  if (n % 2 === 0) {
    result = false;
    return result;
  }

  for (let index = 3; index < n; index = index + 2) {
    if (n % index === 0) {
      result = false;
    }
  }

  return result;
}

function sumOfAllPrime(n) {
  let allPrimes = 0;
  for (let index = 1; index <= n; index++) {
    if (isPrime(index)) {
      allPrimes += index;
    }
    // allPrimes.push(index);
  }
  console.log(allPrimes);
}

prompt.get(['Primenumber'], function(err, result) {
  sumOfAllPrime(result.Primenumber);
});
