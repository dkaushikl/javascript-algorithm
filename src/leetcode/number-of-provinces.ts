class UF {
  parents = [];

  constructor(size) {
    this.parents = new Array(size).fill(0).map((_, i) => i);
  }

  find = i => {
    if (i === this.parents[i]) return i;
    while (i !== this.parents[i]) i = this.parents[i];
    return i;
  };

  union = (x, y) => {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      for (let i = 0; i < this.parents.length; i++) {
        if (this.parents[i] === rootY) {
          this.parents[i] = rootX;
        }
      }
    }
  };
}

const findCircleNum = isConnected => {
  const len = isConnected.length;
  const ud = new UF(len);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < isConnected[0].length; j++) {
      if (isConnected[i][j] === 1 && i !== j) {
        ud.union(i, j);
      }
    }
  }

  return ud.parents.filter((val, i) => val === i).length;
};

// console.log(
//   findCircleNum([
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1]
//   ])
// );
// console.log(
//   findCircleNum([
//     [1, 0, 0, 1],
//     [0, 1, 1, 0],
//     [0, 1, 1, 1],
//     [1, 0, 1, 1]
//   ])
// );
const circleArr = [
  [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
];
console.log(findCircleNum(circleArr));
