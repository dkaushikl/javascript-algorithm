const solveNQueens = n => {
  const result = [];

  // create 4*4 checkboard
  const chessBoard = new Array(n).fill('_').map(() => new Array(n).fill('.'));

  // check column, left up and right up has 'Q' available
  const isValid = (arr, col, row) => {
    for (let newRow = 0; newRow < n; newRow++) {
      if (arr[newRow][col] === 'Q') return false;
    }

    let i = row - 1;
    let j = col - 1;

    while (i >= 0 && j >= 0) {
      if (arr[i][j] === 'Q') return false;

      i--;
      j--;
    }

    i = row - 1;
    j = col + 1;

    while (i >= 0 && j < n) {
      if (arr[i][j] === 'Q') return false;

      i--;
      j++;
    }

    return true;
  };

  const deepClone = (board, result) => {
    const temp = new Array(board.length);
    for (let i = 0; i < board.length; i++) {
      temp[i] = board[i].join('');
    }
    result.push(temp);
  };

  const backtrack = (board, row, result) => {
    if (row === n) {
      // we can not push board direactly because it is pointed that data since beginning;
      // so we need to use deepClone method here to copy entire board into result;
      deepClone(board, result);
      return;
    }

    // we only need to loop through column since we will change row once we placed row
    for (let cols = 0; cols < n; cols++) {
      // check whether place is fine to put queen, if yes then we will find another place to queen with changing rows
      // and while returning to result we will make it blank to continue on every place.
      if (isValid(board, cols, row)) {
        board[row][cols] = 'Q';
        backtrack(board, row + 1, result);
        board[row][cols] = '.';
      }
    }
  };

  // we will start from 0 and will change row when we placed queen on any row.
  backtrack(chessBoard, 0, result);
  return result;
};

console.log(solveNQueens(6));
