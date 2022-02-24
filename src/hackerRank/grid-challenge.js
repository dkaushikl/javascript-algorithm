const gridChallenge = arr => {
  const checkAsc = str => {
    let max = 0;
    for (const char of str) {
      const code = char.charCodeAt();
      if (max > code) return false;
      max = code;
    }
    return true;
  };

  const makeRowAsc = str => {
    return str
      .split('')
      .sort()
      .join('');
  };

  for (let i = 0; i < arr.length; i++)
    if (!checkAsc(arr[i])) arr[i] = makeRowAsc(arr[i]);

  for (let i = 0; i < arr[0].length; i++) {
    let s = '';
    for (let j = 0; j < arr.length; j++) s += arr[j][i];
    if (!checkAsc(s)) return 'NO';
  }

  return 'YES';
};

// console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));
// console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv']));
console.log(gridChallenge(['ppp', 'ypp', 'wyw']));
