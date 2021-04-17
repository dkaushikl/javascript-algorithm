function pythagorianTriplet(limit) {
  let max = 0;
  for (let i = 1; i <= limit; i += 1) {
    for (let j = i + 1; j <= limit; j += 1) {
      var c = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));

      if (i + j + c === limit) {
        max = i * j * c;
        break;
      }
    }
  }

  console.log('max', max);
}

function pythagorianTriplet2(limit) {
  let max = 0;
  for (let i = 1; i <= limit; i += 1) {
    for (let j = i + 1; j <= limit; j += 1) {
      if (Math.pow(i) + Math.pow(j) === Math.sqrt(i, j)) {
        max = i * j * (1000 - (i + j));
      }
    }
  }

  console.log('max', max);
}

pythagorianTriplet(1000);
pythagorianTriplet2(1000);
