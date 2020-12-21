function smalledMultiple(n) {
  let number = 0;
  const twentyArray = Array.from(Array(20).keys());

  for (let index = 0; index <= Number.MAX_SAFE_INTEGER; index++) {
    if (Number(index) === 0) {
      continue;
    }

    const test = twentyArray.filter(x => index % x === 0);

    if (test.length === 19) {
      number = index;
      break;
    }
  }

  console.log(number);
}

function smalledMultiple1(n) {
  let number = 0;
  const twentyArray = Array.from(Array(21).keys());
  twentyArray.shift();

  const allPrimes = getPrime(twentyArray);
  console.log('allPrimes', allPrimes);

  const lcmArrays = twentyArray.filter(val => allPrimes.indexOf(val) === -1);

  console.log('lcmArrays', lcmArrays);

  const allLCM = getLCM(lcmArrays);
}

function getLCM(arr) {}

function getPrime(arr) {
  return arr.filter((x, index) => index != 1 && x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0 && x % 7 !== 0);
}

const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};

smalledMultiple1(20);

// 16,9,5,7,11,13,17,19
