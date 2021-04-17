function exponential(arr, target, left = 0, right = arr.length - 1) {
  let pos = 0;

  if (left <= right && target >= arr[left] && target <= arr[right]) {
    var firstCondition = right - left;

    var secondCondition = arr[right] - arr[left];

    var thirdCondition = firstCondition / secondCondition;

    var forthCondition = target - arr[left];

    // Math.floor(l + (((r - l) / arr[r] - arr[l]) * target - arr[l]))
    // Math.floor(0 + ((14 / 37) * 8))
    pos = Math.floor(left + thirdCondition * forthCondition);
    console.log(`left, right, pos`, left, right, pos);
    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      return interpolationsearch(arr, target, pos + 1, right);
    }

    if (arr[pos] > target) {
      return interpolationsearch(arr, target, left, pos - 1);
    }
  }

  return -1;
}

function extraLongFactorials(n) {
  n = BigInt(n);
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  console.log(BigInt(result).toString());
}

function multiply(n1, n2) {
  if (n2.toString().length > n1.toString().length) [n1, n2] = [n2, n1];

  let result = 1;
  let carry = 0;
  if (n2.length === 1) {
    for (let i = 0; i < n1.length; i++) {
      let firstCharacter = n1.toString().charAt(n1.toString().length - i);
      let lastResult = firstCharacter * n2;

      if (lastResult.toString().length > 1) {
        let finalResult = lastResult.toString();
        carry = finalResult.charAt(finalResult.length - x1);
        let temp = finalResult.charAt(finalResult.length - 2);
        result = temp;
      }
    }
  }

  return result;
}

function extraLongFactorialsSimple(n) {
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
}

function marsExploration(s) {
  // let arr = [];

  // for (let i = 0; i < s.length; i += 3)
  //     arr = [...arr, s.substr(i, i + 3)];

  // let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== 'SOS') {
  //         for (let j = 0; j <= 2; j++) {
  //             if (j === 0 && arr[i][j] !== 'S') {
  //                 count++;
  //             }

  //             if (j === 1 && arr[i][j] !== 'O') {
  //                 count++;
  //             }

  //             if (j === 2 && arr[i][j] !== 'S') {
  //                 count++;
  //             }
  //         }
  //     }
  // }

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] != 'S') count++;

    if (s[i + 1] != 'O') count++;

    if (s[i + 2] != 'S') count++;
  }

  return count;
}

function hackerrankInString(s) {
  let hackerrank = 'hackerrank';
  s = s.toString().toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === hackerrank[0]) {
      hackerrank = hackerrank.substr(1, hackerrank.length - 1);
    }
  }

  return hackerrank.length <= 0 ? 'YES' : 'NO';
}

function pangrams(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (alphabet.includes(s[i])) {
      alphabet = alphabet.filter(e => e !== s[i]);
    }
  }

  return alphabet.length === 0;
}

function FindIntersection(strArr) {
  if (strArr.length <= 2) return 0;

  const convertIntoAnArray = arr => {
    return arr.split(',').map(x => x.replace(/ /g, ''));
  };

  const arr = [...convertIntoAnArray(strArr[0]), ...convertIntoAnArray(strArr[1])];
  const midByTwo = Math.max(arr.length / 2);
}

pangrams('We promptly judged antique ivory buckles for the next prize');

hackerrankInString('hhaacckkekraraannk');

marsExploration('SOSSOT');
marsExploration('SOSSOT');

extraLongFactorials(30);

console.log(exponential([10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47], 21));
