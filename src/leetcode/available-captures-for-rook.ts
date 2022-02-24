var numRookCaptures = function(board) {
  const countCapturesPawn = (i, j, type, count = 0) => {
    if (i < 0 || i > 7 || j < 0 || j > 7) return count;

    if (board[i][j] === 'p') {
      count += 1;
      return count;
    }

    if (board[i][j] === 'B' || board[i][j] === 'R') return count;

    if (type === 'up') return countCapturesPawn(i - 1, j, type, count);
    if (type === 'down') return countCapturesPawn(i + 1, j, type, count);
    if (type === 'left') return countCapturesPawn(i, j - 1, type, count);
    if (type === 'right') return countCapturesPawn(i, j + 1, type, count);
  };

  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        count += countCapturesPawn(i - 1, j, 'up');
        count += countCapturesPawn(i + 1, j, 'down');
        count += countCapturesPawn(i, j - 1, 'left');
        count += countCapturesPawn(i, j + 1, 'right');
      }
    }
  }
  return count;
};

let board = [
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', 'B', '.', '.', '.', '.'],
  ['.', '.', '.', 'R', 'B', '.', '.', 'p'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'B', '.', '.', '.', '.'],
  ['.', '.', '.', 'p', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.']
];
console.log(numRookCaptures(board));
