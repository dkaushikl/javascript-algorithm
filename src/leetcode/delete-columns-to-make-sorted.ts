var minDeletionSize = function(strs) {
  let map = {};

  for (let i = 0; i < 26; i++) {
    map[String.fromCharCode(97 + i)] = i + 1;
  }

  let count = 0;

  const isSorted = str => {
    if (str.length === 1) return true;

    for (let i = 1; i < str.length; i++) {
      if (map[str[i]] < map[str[i - 1]]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < strs[0].length; i++) {
    let str = '';
    for (let j = 0; j < strs.length; j++) {
      str += strs[j][i];
    }

    if (!isSorted(str)) {
      count++;
    }
  }
  return count;
};

console.log(minDeletionSize(['cba', 'daf', 'ghi']));
console.log(minDeletionSize(['a', 'b']));
console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));
console.log(minDeletionSize(['ab', 'ba', 'cd']));
console.log(minDeletionSize(['rrjk', 'furt', 'guzm']));
