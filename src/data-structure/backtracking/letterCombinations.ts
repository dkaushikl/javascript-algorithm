const letterCombinations = (str: string) => {
  const combinations = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const result = [];
  const backtrack = (arr: string[], path = []) => {
    if (arr.length === 0) {
      result.push(path.join(''));
      return;
    }

    for (const item of arr[0]) backtrack(arr.slice(1), [...path, item]);
  };

  const buildArr: string[] = [];
  for (const char of str)
    if (combinations[Number(char)]) buildArr.push(combinations[Number(char)]);

  backtrack(buildArr);
  return result;
};

console.log(letterCombinations('234'));
console.log(letterCombinations('23'));
console.log(letterCombinations('2'));
