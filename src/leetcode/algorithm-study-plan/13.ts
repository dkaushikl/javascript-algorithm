const checkInclusion = (s1, s2) => {
  if (s2 === '' && s1 === '') return true;
  if (s2 === '' || s1 === '') return false;
  if (s1.length > s2.length) return false;

  let i = 0;
  while (i < s2.length) {
    if (s1.length === 1 && s2[i] === s1[s1.length - 1]) return true;

    if (s2[i] === s1[0]) {
      let j = 1;
      let k = i + 1;
      let isFound = true;
      while (j < s1.length) {
        if (s1[j++] !== s2[k++]) {
          isFound = false;
          break;
        }
      }

      if (isFound) return true;
    }

    if (s2[i] === s1[s1.length - 1]) {
      let j = s1.length - 2;
      let k = i + 1;
      let isFound = true;
      while (j >= 0) {
        if (s1[j--] !== s2[k++]) {
          isFound = false;
          break;
        }
      }

      if (isFound) return true;
    }
    i++;
  }
  return false;
};

console.log(checkInclusion('ab', 'ab'));
