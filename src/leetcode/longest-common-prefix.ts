function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];
  let finalResult = '';

  for (let i = 0; i < strs.length - 1; i++) {
    let previousResult = '';
    for (let j = 0; j < strs[i].length && j < strs[i + 1].length; j++) {
      if (finalResult && finalResult[j] === strs[i + 1][j]) {
        previousResult += strs[i + 1][j];
      } else if (strs[i][j] === strs[i + 1][j] && !finalResult) {
        previousResult += strs[i + 1][j];
      } else {
        break;
      }
    }
    // console.log(previousResult);
    if (!previousResult) return '';
    finalResult = previousResult;
  }

  return finalResult;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight', 'flown']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
