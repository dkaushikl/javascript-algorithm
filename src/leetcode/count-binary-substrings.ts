var countBinarySubstrings = function(s) {
  let count = 0;

  let i = 0;
  let j = i;
  let zeroCount = 0;
  let oneCount = 1;
  let isNice = (i, j) => {
    let a = i;
    let b = j;

    while (a < b) {
      if (s[a] === s[b]) return false;
      a++;
      b--;
    }
    return true;
  };
  while (i < s.length) {
    if ((i + j) % 2 !== 0 && i + j / 2 > 1) {
      console.log(i, j);
      let result = isNice(i, j);
      console.log(result, count);
      if (result) count++;
      i++;
      j = i;
      continue;
    }
    if (j === s.length - 1) {
      i++;
      break;
    } else {
      j++;
    }
  }
  return count;
};

// console.log(countBinarySubstrings('00110011'));
// console.log(countBinarySubstrings('10101'));
console.log(countBinarySubstrings('101010110'));
// 10
// 01
// 10
// 01
// 10
// 01
// 10
