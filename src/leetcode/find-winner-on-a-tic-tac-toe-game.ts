var tictactoe = function(moves) {
  if (moves.length < 5) return 'Pending';
  let a = moves.filter((_, i) => i % 2 === 0);
  let b = moves.filter((_, i) => i % 2 !== 0);

  const checkRow = arr => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
      map[arr[i][0]] = map[arr[i][0]] ? map[arr[i][0]] + 1 : 1;
      if (map[arr[i][0]] === 3) return true;
    }
  };

  const checkColumn = arr => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
      map[arr[i][1]] = map[arr[i][1]] ? map[arr[i][1]] + 1 : 1;
      if (map[arr[i][1]] === 3) return true;
    }
  };

  const checkDiagonally = arr => {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] + arr[i][1] === 2) {
        count++;
      }
    }
    if (count === 3) return true;

    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === 0 && arr[i][1] === 0) {
        count++;
      }

      if (arr[i][0] === 1 && arr[i][1] === 1) {
        count++;
      }

      if (arr[i][0] === 2 && arr[i][1] === 2) {
        count++;
      }
    }
    if (count === 3) return true;
    return false;
  };

  const checkAWin = () => checkRow(a) || checkColumn(a) || checkDiagonally(a);

  const checkBWin = () => checkRow(b) || checkColumn(b) || checkDiagonally(b);

  return checkAWin()
    ? 'A'
    : checkBWin()
    ? 'B'
    : moves.length === 9
    ? 'Draw'
    : 'Pending';
};
console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2]
  ])
);
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0]
  ])
);

console.log(
  tictactoe([
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 1],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 2],
    [2, 2]
  ])
);
console.log(
  tictactoe([
    [0, 0],
    [1, 1]
  ])
);
