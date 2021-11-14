const firstUniqChar = s => {
  const map = {};
  for (const item of s) map[item] = map[item] ? map[item] + 1 : 1;

  console.log(map);
  const arr = Object.keys(map);
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar('dddccdbba'));
console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
