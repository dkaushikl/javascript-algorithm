const groupAnagrams = (strs: string[]) => {
  const map = {};
  strs = strs.sort();

  for (const item of strs) {
    const str = item
      .split('')
      .sort()
      .join('');

    if (map[str]) {
      map[str].push(item);
    } else {
      map[str] = [item];
    }
  }

  const result: any = [];
  for (const item in map) result.push(map[item]);
  return result;
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
