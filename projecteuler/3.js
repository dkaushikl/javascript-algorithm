'use strict';
function largestPrimeFactor(n) {
  var count = [];
  var value = 1;
  for (let index = 1; index <= Number.MAX_SAFE_INTEGER; index += 1) {
    if (index !== 1 && index % 2 !== 0 && index % 3 !== 0 && index % 5 !== 0 && index % 7 !== 0 && n % index === 0) {
      if (n >= value * index) {
        value = value * index;
        count.push(index);
      } else {
        break;
      }
    }
  }

  return count;
}

largestPrimeFactor(600851475143);
