// https://leetcode.com/problems/permutation-in-string/
const checkInclusion = (s1, s2) => {
  const map = {};

  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = map[s1[i]] + 1 || 1;
  }

  const checkPerm = (str, clonedMap) => {
    for (let i = 0; i < str.length; i++) {
      if (!clonedMap[str[i]]) return false;
      clonedMap[str[i]]--;

      if (clonedMap[str[i]] === 0) {
        delete clonedMap[str[i]];
      }
    }

    return Object.keys(clonedMap).length <= 0 ? true : false;
  };

  let str = '';
  for (let j = 0; j < s2.length; j++) {
    if (s2[j] in map) {
      str += s2[j];
      if (str.length === s1.length) {
        const clonedMap = { ...map };
        if (checkPerm(str, clonedMap)) {
          return true;
        } else {
          str = str.slice(1);
        }
      }
    } else {
      str = '';
    }
  }

  return false;
};

// console.log(checkInclusion('ab', 'eidbaooo'));
// console.log(checkInclusion('ab', 'eidboooba'));
// console.log(checkInclusion('ab', 'eidboooa'));
// console.log(checkInclusion('a', 'ab'));
// console.log(checkInclusion('adc', 'dcda'));
