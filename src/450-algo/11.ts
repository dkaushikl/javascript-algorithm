const doUnion = (a, b) => {
  let map = {};
  let count = 0;

  for (const item of a) {
    map[item] = map[item] || 1;
    count++;
  }

  for (const item of b) if (!map.hasOwnProperty(item)) count++;

  return count;
};

console.log(doUnion([85, 25, 1, 32, 54, 6], [85, 2]));
