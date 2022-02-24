const partition = s => {
  const result = [];
  const isPalindrom = str => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }

    return true;
  };

  const backtrack = (str, path) => {
    if (!str.length) result.push(path);

    for (let g = 1; g <= str.length; g++) {
      const curr = str.slice(0, g);
      if (isPalindrom(curr)) backtrack(str.slice(g), [...path, curr]);
    }
  };

  backtrack(s, []);
  return result;
};

console.log(partition('aab'));
