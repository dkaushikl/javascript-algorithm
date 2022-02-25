function theLoveLetterMystery(s) {
  const N = Math.floor(s.length / 2);
  let result = 0;
  for (let i = 0; i < N; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      const endCode = s[s.length - i - 1].charCodeAt();
      const startCode = s[i].charCodeAt();

      const diff = Math.abs(endCode - startCode);
      result += diff;
    }
  }
  return result;
}

console.log(theLoveLetterMystery('adslkfjas'));

function gemstones(arr) {
  // Write your code here
  //   arr.sort();

  let finalSet = new Set(arr[0]);
  for (let word of arr) {
    let tempSet = new Set();
    for (let char of word) {
      if (finalSet.has(char)) {
        tempSet.add(char);
      }
    }
    finalSet = new Set([...tempSet]);
  }
  return [...finalSet].length;
}

console.log(gemstones(['abc', 'abc', 'bc']));

function funnyString(s) {
  // Write your code here
  let resultA = [];

  for (let char of s) {
    const code = char.charCodeAt();
    resultA.push(code);
  }

  let resultB = [...resultA];
  resultA.reverse();

  for (let i = 1; i < resultA.length; i++) {
    const first = Math.abs(resultA[i] - resultA[i - 1]);
    const second = Math.abs(resultB[i] - resultB[i - 1]);

    if (first !== second) return 'Not Funny';
  }

  return 'Funny';
}

console.log(funnyString('acxz'));
console.log(funnyString('bcxz'));

var longestCommonPrefix = function(strs) {
  strs.sort((a, b) => a.length - b.length);

  let min = strs[0];
  let result = '';

  for (const char of min) {
    let temp = result + char;
    let isPrefixAll = strs.every(x => x.startsWith(temp));
    if (isPrefixAll) {
      result += char;
    } else {
      break;
    }
  }

  return result;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['aca', 'aac', 'aaa']));

var letterCombinations = function(digits) {
  const digitChars = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  if (!digits) return [];

  const results = [];

  const backtrack = (num, result = '') => {
    if (!num) {
      results.push(result);
      return;
    }

    const alphabets = digitChars[num[0]];

    for (let i = 0; i < alphabets.length; i++) {
      backtrack(num.slice(1), result + alphabets[i]);
    }
  };

  backtrack(digits);
  return results;
};

console.log(letterCombinations('23'));
console.log(letterCombinations('234'));
console.log(letterCombinations(''));
