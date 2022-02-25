var countPoints = function(rings) {
  console.log(rings);
  let map = {};

  const updateArr = (color, i) => {
    let temp = map[rings[i + 1]];
    if (color === 'R') {
      temp[0] = true;
      map[rings[i + 1]] = temp;
    } else if (color === 'G') {
      temp[1] = true;
      map[rings[i + 1]] = temp;
    } else {
      temp[2] = true;
      map[rings[i + 1]] = temp;
    }
  };

  for (let i = 0; i < rings.length; i += 2) {
    if (map[rings[i + 1]]) {
      updateArr(rings[i], i);
    } else {
      map[rings[i + 1]] = [false, false, false];
      updateArr(rings[i], i);
    }
  }

  let count = 0;
  for (const item in map) {
    if (map[item][0] && map[item][1] && map[item][2]) {
      count++;
    }
  }

  return count;
};

console.log(countPoints('B0B6G0R6R0R6G9'));
