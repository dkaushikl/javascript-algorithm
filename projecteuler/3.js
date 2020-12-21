'use strict';
function largestPrimeFactor(n) {
  var count = [];
  var value = 1;
  for (let index = 1; index <= Number.MAX_SAFE_INTEGER; index++) {
    if (index !== 1 && index % 2 !== 0 && index % 3 !== 0 && index % 5 !== 0 && index % 7 !== 0 && n % index === 0) {
      if (n >= value * index) {
        value = value * index;
        count.push(index);
      } else {
        break;
      }
    }
  }
  console.log(count);
}

function largestPrimeFactor2(n) {
  var maxPrime = -1;

  while (n % 2 === 0) {
    maxPrime = 2;
  }
}

largestPrimeFactor2(600851475143);
