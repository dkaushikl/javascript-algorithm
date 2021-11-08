const isSubset = (a1, a2, n, m) => {
  let map = {};

  for (const item of a1) {
    map[item] = map[item] ? map[item] + 1 : 1;
  }

  for (const item of a2) {
    if (map.hasOwnProperty(item)) {
      if (map[item] > 1) map[item]--;
      else delete map[item];
    } else {
      return false;
    }
  }

  return true;
};

let a1 = [1, 2, 3, 4, 5, 6, 1, 1];
let a2 = [1, 2, 3, 1, 1];
console.log(isSubset(a1, a2, a1.length, a2.length));
