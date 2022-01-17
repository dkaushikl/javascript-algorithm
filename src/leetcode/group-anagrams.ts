let groupAnagrams = strs => {
  const result = [];
  const map = {};
  let i = 0;
  while (i < strs.length) {
    const sortedStr = strs[i]
      .split('')
      .sort()
      .join('');

    if (map[sortedStr]) {
      result[map[sortedStr] - 1].push(strs[i]);
    } else {
      result.push([strs[i]]);
      map[sortedStr] = result.length;
    }
    i++;
  }

  result.map(x => {
    x.sort();
    return x;
  });
  return result.sort((a, b) => a.length - b.length);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
