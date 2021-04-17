// Given two strings, write a method to decide if one is a permutation of the other

// with using javascript inbuilt function
function checkPermute(s1: string | any[], s2: string | any[]) {
  if (s1.length !== s2.length) {
    return false;
  } else {
    const firstString = s1
      .toString()
      .split('')
      .sort()
      .join('');
    const secondString = s2
      .toString()
      .split('')
      .sort()
      .join('');
    return firstString === secondString;
  }
}

// with hashmap
function checkPermute2(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  } else {
    const firstMap = {};
    for (let i = 0; i < s1.length; i++) {
      if (firstMap[s1[i]]) firstMap[s1[i]]++;
      else firstMap[s1[i]] = 1;
    }

    for (let i = 0; i < s2.length; i++) {
      if (firstMap[s2[i]] > 0) {
        firstMap[s2[i]]--;
      } else return false;
    }

    return true;
  }
}

console.log(checkPermute2('abcc', 'cbca'));
