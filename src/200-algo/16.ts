const validAnagram = (s: string, t: string) => {
  const map = {};

  for (const item of s) map[item] = map[item] ? map[item] + 1 : 1;

  for (const item of t) {
    if (map.hasOwnProperty(item)) {
      if (map[item] === 1) delete map[item];
      else map[item]--;
    } else return false;
  }

  return Object.keys(map).length > 0 ? false : true;
};

const s = 'ab';
const t = 'a';

console.log(validAnagram(s, t));
