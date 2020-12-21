function gcd(n) {
  var minimum = Math.min(...n);
  let result = 0;

  for (let index = minimum - 1; index >= 1; index--) {
    if (n[0] % index === 0 && n[1] % index === 0) {
      result = index;
      break;
    }
  }

  return result;
}

function gcd1(n) {
  var minimum = Math.min(...n);
  let result = 0;
  for (let index = 1; index < minimum; index++) {
    if (n[0] % index === 0 && n[1] % index === 0) {
      if (index > result) {
        result = index;
      }
    }
  }

  return result;
}

function gcd2(originalA, originalB) {
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  while (true) {
    if (b === 0) {
      break;
    } else {
      var d = a % b;
      a = b;
      b = d;
    }
  }

  return a;
}

function euclidianAlgorithm(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  console.log('a, b ---- ', a, b);
  return b === 0 ? a : euclidianAlgorithm(b, a % b);
}

// console.log(gcd2(48, 180));
// console.log(euclidianAlgorithm(48, 180));

var start = Number(new Date());
console.log(gcd([48, 180]));
var end = Number(new Date());
console.log(`Execution time: ${end - start} ms`);

var start1 = Number(new Date());
console.log(gcd2(48, 180));
var end1 = Number(new Date());
console.log(`Execution time 1: ${end1 - start1} ms`);
