const isPalindrome = s => {
  s = s.toLowerCase().replace(/[\W_]/g, '');

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
