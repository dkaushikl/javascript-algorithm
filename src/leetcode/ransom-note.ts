const canConstruct = (ransomNote, magazine) => {
  if (ransomNote === magazine) return true;

  if (magazine.length < ransomNote.length) return false;

  const map = {};
  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]]) {
      map[ransomNote[i]] = map[ransomNote[i]] + 1;
    } else {
      map[ransomNote[i]] = 1;
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      if (map[magazine[i]] === 1) {
        delete map[magazine[i]];
      } else {
        map[magazine[i]] = map[magazine[i]] - 1;
      }
    }
  }

  return Object.keys(map).length <= 0 ? true : false;
};

console.log(canConstruct('a', 'aca'));
