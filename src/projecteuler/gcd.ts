class GCD {
  static gcd(n) {
    var minimum = Math.min(...n);
    let result = 0;

    for (let index = minimum - 1; index >= 1; index -= 1) {
      if (n[0] % index === 0 && n[1] % index === 0) {
        result = index;
        break;
      }
    }

    return result;
  }

  static gcd1(n) {
    var minimum = Math.min(...n);
    let result = 0;
    for (let index = 1; index < minimum; index += 1) {
      if (n[0] % index === 0 && n[1] % index === 0) {
        if (index > result) {
          result = index;
        }
      }
    }

    return result;
  }

  static gcd2(originalA, originalB) {
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

  static euclidianAlgorithm(originalA, originalB) {
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);

    console.log('a, b ---- ', a, b);
    return b === 0 ? a : GCD.euclidianAlgorithm(b, a % b);
  }
}

GCD.gcd(48, 180);
GCD.gcd1(48, 180);
GCD.gcd2(48, 180);
GCD.euclidianAlgorithm(48, 180);
