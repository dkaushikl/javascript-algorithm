const solveSudoku = (board, start = 0, start2 = 0) => {
  if (start >= board.length || start2 >= board[0].length) return board;
  console.log(start, start2);

  for (let i = start; i < board.length; i++) {
    for (let j = start2; j < board[i].length; j++) {
      if (board[i][j] !== '.') continue;
      const possibilities = getAllPossibilities(board, i, j);

      for (let k = 0; k < possibilities.length; k++) {
        board[i][j] = possibilities[k];

        if (j === board[i].length) {
          solveSudoku(board, i + 1, j)
        } else {
          solveSudoku(board, i, j + 1)
        }

        // board[i][j] = '.';
      }
    }
  }
}

const checkPositionValid = (row, col, board) => {
  return true;
}

const deleteItem = (item, nums) => {
  const idx = nums.indexOf(Number(item));
  if (idx !== -1)
    nums.splice(idx, 1);
}

const getAllPossibilities = (board, i, j) => {
  const nums = new Array(9).fill(0).map((_, index) => index + 1);

  for (const item of board[i]) {
    if (item !== '.')
      deleteItem(item, nums);
  }

  for (let k = 0; k < board[i].length; k++) {
    if (board[k][j] !== '.')
      deleteItem(board[k][j], nums);
  }

  const blockRow = Math.floor(i / 3) * 3;
  const blockCol = Math.floor(j / 3) * 3;
  console.log(i, j);
  console.log(blockRow, blockCol);
  
  
  
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
       

      

    }
  }
  return [1, 2, 4];

}


console.log(solveSudoku([['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']]));
