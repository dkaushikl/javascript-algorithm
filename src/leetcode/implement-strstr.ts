const strStr = (haystack, needle) => {
  if (needle === '' || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;

  let i = 0;
  while (i <= haystack.length - needle.length) {
    if (needle.length === 1 && haystack[i] === needle[0]) return i;

    if (haystack[i] != needle[0]) {
      i++;
    } else {
      let j = 1;
      let isTargetMatched = true;

      while (j < needle.length) {
        if (haystack[i + j] !== needle[j]) {
          isTargetMatched = false;
          break;
        }
        j++;
      }
      if (isTargetMatched) return i;
      i++;
    }
  }
  return -1;
};

console.log(strStr('mississippi', 'issip'));
