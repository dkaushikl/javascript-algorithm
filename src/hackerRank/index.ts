export class HackerRank {
  static maximumSum(a, m) {
    let bigModule = 0;
    const eleModule = 0;
    const allPair = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] % m > bigModule) bigModule = a[i] % m;

      for (let j = i + 1; j < a.length; j++) {
        const val = a.slice(i, j + 1).reduce((a, b) => (a += b), 0);
        console.log(val);

        if (val % m > bigModule) {
          bigModule = val % m;
        }
      }
    }

    // var bigModule = 0;
    // for (let k = 0; k < allPair.length; k++) {
    //     let eleModule = allPair[k] % m;
    //     if (eleModule > bigModule) {
    //         bigModule = eleModule;
    //     }
    // }

    return bigModule;
  }

  static dayOfProgrammer(year) {
    let februaryDays = 28;

    // Julian calendar
    if (year >= 1700 && year <= 1918) {
      if (year % 4 === 0) {
        februaryDays = 29;
      }

      // check transition
      if (year === 1918) {
        februaryDays = februaryDays - 13;
      }
    }

    // Gregorian calendar
    if (year >= 1919) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        februaryDays = 29;
      }
    }

    const totalDays = [31, februaryDays, 31, 30, 31, 30, 31, 31];
    const sumOftotalDays = totalDays.reduce((a, b) => a + b, 0);
    const days = 256 - sumOftotalDays;

    return `${days}.09.${year}`;
  }

  static bonAppetit(bill, k, b) {
    bill[k] = 0;
    const total = bill.reduce((a, b) => {
      a += b;
      return a;
    }, 0);

    const chargePerPerson = total / 2;

    if (chargePerPerson === b) console.log(`Bon Appetit`);
    else console.log(b - chargePerPerson);
  }

  static pageCount(n, p) {
    const bookArr: number[][] = [];
    let anotherArr: number[] = [];

    for (let i = 0; i <= n; i++) {
      anotherArr.push(i);

      if (anotherArr.length === 2 || i === n) {
        bookArr.push(anotherArr);
        anotherArr = [];
      }
    }

    let min = 0;
    let max = 0;
    let isMinFound = false;
    for (let i = 0; i < bookArr.length; i++) {
      if (!isMinFound) {
        if (bookArr[i].includes(p)) {
          isMinFound = true;
          continue;
        }

        min++;
        continue;
      }

      if (isMinFound) {
        if (bookArr[i].includes(p)) {
          break;
        }

        max++;
        continue;
      }
    }

    return min < max ? min : max;
  }

  static repeatedString(s, n, target) {
    n = n.toLowerCase();
    const totalTarget = (s.match(/a/g) || []).length;

    const checkTargetLength = target % s.length;

    if (checkTargetLength === 0) {
      return totalTarget * (target / s.length);
    } else {
      // first check how many char you get as mod and subtract it from main string
      // then count how many character you have
      // then add that count with multiplication of total count of string with low mod.

      const remainingChar = (s.substr(0, checkTargetLength).match(/a/g) || [])
        .length;
      const total = totalTarget * ((target - checkTargetLength) / s.length);

      return total + remainingChar;
    }
  }

  static extraLongFactorials(n) {
    let result = 1;
    for (let i = n; i >= 2; i -= 1) {
      result *= i;
    }
    return BigInt(result);
  }

  static catAndMouse(x, y, z) {
    const firstCatSteps = Math.abs(z - x);
    const secondCatSteps = Math.abs(z - y);

    if (secondCatSteps === firstCatSteps) return 'Mouse C';

    return secondCatSteps > firstCatSteps ? 'Cat A' : 'Cat B';
  }

  static makeAnagram(a, b) {
    const freqs = {};
    a.split('').forEach(char => (freqs[char] = (freqs[char] || 0) + 1));
    b.split('').forEach(char => (freqs[char] = (freqs[char] || 0) - 1));

    return Object.keys(freqs).reduce(
      (sum, key) => sum + Math.abs(freqs[key]),
      0
    );
  }

  static alternatingCharacters(s) {
    const test = s.split('');

    let count = 0;
    for (let i = 0; i < test.length - 1; i++) {
      if (test[i] === test[i + 1]) {
        count++;
      }
    }

    return count;
  }

  static sherLockAndValidString(s: string) {
    const test = [];

    s.split('').map(x => {
      test[x] = test[x] ? test[x] + 1 : 1;
    });

    let result = 'yes';
    const countFirstChar = test[Object.keys(test)[0]];
    let isFirstTimeApprove = false;
    Object.keys(test).forEach(x => {
      if (test[x] !== countFirstChar) {
        if (isFirstTimeApprove) {
          result = 'no';
        } else {
          isFirstTimeApprove = true;
        }
      }
    });

    return result;
  }

  static substrCount(n, s) {
    const strArr = s.split('');
    let count = 0;

    const returnPalindrom = s =>
      s
        .split('')
        .reverse()
        .join('');

    for (let i = 0; i < strArr.length; i++) {
      count++;

      for (let j = i + 1; j < strArr.length && i !== strArr.length - 1; j++) {
        const newString = s.slice(i, j + 1);

        if (newString === returnPalindrom(newString)) count++;
        else if (newString.length === 3) break;
      }
    }

    return count;
  }

  static countValleys(s) {
    let numValleys = 0;
    let altitude = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'U') {
        if (altitude === -1) {
          numValleys += 1;
        }
        altitude += 1;
      } else {
        altitude -= 1;
      }
    }

    return numValleys;
  }

  static newCharacterSet(s = 'utta') {
    // https://stackoverflow.com/a/51471587
    // const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

    // https://www.geeksforgeeks.org/convert-an-array-to-an-object-in-javascript/
    // var test = {};
    // for (var i = 0; i < alphabet.length; ++i)
    //     test[alphabet[i]] = i + 1;

    // console.log(test);

    const c = 'qwertyuiopasdfghjklzxcvbnm';

    const d = {};

    for (let i = 0; i < c.length; i++) {
      if (!d[c[i]]) d[c[i]] = i + 1;
    }

    const finalChar = [...s];
    let result = '';
    for (let i = 0; i < finalChar.length; i++) {
      result += String.fromCharCode(96 + d[finalChar[i]]);
    }

    return result;
  }

  static twoLargeNumber(n1, n2) {
    if (n1 <= 0) return n2;
    if (n2 <= 0) return n1;

    if (n1.toString().length > n2.toString().length) {
      const diff = n1.toString().length - n2.toString().length;
      n2 = ''.padStart(diff, '0') + n2;
    }

    if (n2.toString().length > n1.toString().length) {
      const diff = n2.toString().length - n1.toString().length;
      n1 = ''.padStart(diff, '0') + n1;
    }

    let sum: any = 0;
    let moduler = 0;
    const n =
      n1.toString().length > n2.toString().length
        ? n1.toString().length
        : n2.toString().length;

    for (let i = n - 1; i >= 0; i--) {
      const first = n1.toString()[i] ? n1.toString()[i] : 0;
      const second = n2.toString()[i] ? n2.toString()[i] : 0;

      const test = Number(first) + Number(second) + Number(moduler);

      if (test >= 10) moduler = test === 10 ? 1 : test - 10;

      if (i === 0) sum = test.toString() + sum.toString();
      else if (i === n - 1) sum = test.toString()[0];
      else sum = test.toString()[0] + sum.toString();
    }
    return sum;
  }

  static checkSumString(n = 1111112223) {
    const str = n.toString();
    const arr = str.split('');
    const arrLength = arr.length;
    const newArray: string[] = [];

    for (let i = 0; i < arrLength - 1; i++) {
      const newString: string = str[i] + str[i + 1];
      if (!newArray.includes(newString)) newArray.push(newString);
    }

    const result: object[] = [];

    for (let i = 0; i < newArray.length - 1; i++) {
      for (let j = i + 1; j < newArray.length - 1; j++) {
        const sum = Number(newArray[i]) + Number(newArray[j]);

        if (newArray.includes(sum.toString())) {
          result.push({
            first: newArray[i],
            second: newArray[j],
            sum
          });
        }
      }
    }

    return result;
  }

  static calculateMinMax(x1 = 645, x2 = 666) {
    const firstStrWithSix = x1.toString().replace(/5/g, '6');
    const secondStrWithSix = x2.toString().replace(/5/g, '6');

    const firstStrWithFive = x1.toString().replace(/6/g, '5');
    const secondStrWithFive = x2.toString().replace(/6/g, '5');

    return {
      Min: Number(firstStrWithFive) + Number(secondStrWithFive),
      Max: Number(firstStrWithSix) + Number(secondStrWithSix)
    };
  }

  static minSumOfSquares(s = 'abccc', k = 1) {
    const hashTable = {};

    s.toLowerCase()
      .split('')
      .forEach(x => {
        if (!hashTable[x]) hashTable[x] = 1;
        else hashTable[x]++;
      });

    while (k > 0) {
      let char,
        max = 0;

      Object.keys(hashTable).forEach(x => {
        if (hashTable[x] > max) {
          char = x;
          max = hashTable[x];
        }
      });

      hashTable[char]--;
      k--;
    }

    return Object.keys(hashTable).reduce(
      (a, b) => Math.pow(+hashTable[b], 2) + +a,
      0
    );
  }

  // https://www.hackerrank.com/challenges/two-strings/problem
  static twoStrings(s1, s2) {
    if (!s1 || !s2) return 'NO';

    const map = {};

    for (let i = 0; i < s1.length; i++) {
      map[s1[i]] = map[s1[i]] + 1 || 1;
    }

    for (let j = 0; j < s2.length; j++) {
      if (map[s2[j]]) return 'YES';
    }

    return 'NO';
  }

  // https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
  static sherlockAndAnagrams(s) {
    if (!s) return 'NO';

    const map = {};

    for (let i = 0; i < s.length; i++) {
      map[s[i]] = map[s[i]] + 1 || 1;
    }

    const count = Object.keys(map).reduce(
      (acc, char) => acc + (map[char] % 2),
      0
    );
  }
}
