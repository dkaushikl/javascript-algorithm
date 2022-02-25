const longestPalindrome = s => {
  let maxPalindrom = '';
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

  const backtrack = str => {
    for (let i = 1; i <= str.length; i++) {
      const curr = str.slice(0, i);

      if (isPalindrom(curr)) {
        if (maxPalindrom.length <= curr.length) maxPalindrom = curr;

        backtrack(str.slice(1));
      }
    }
  };

  backtrack(s);
  return maxPalindrom;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbcbc'));
console.log(longestPalindrome('cbbd'));
