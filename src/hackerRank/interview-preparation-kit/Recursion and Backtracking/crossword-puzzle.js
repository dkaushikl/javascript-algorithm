function crosswordPuzzle(crossword, words) {
  const dfs = (i, j, type, replaced = '') => {
    if (i < 0 || i >= crossword.length || j < 0 || j >= crossword[0].length)
      return;

    if (type && j === '+') {
      return;
    }

    crossword[i][j] = replaced;

    for (const word of words) {
      for (const char of word) {
        if (type) {
          dfs(i, j + 1, type, char);
        }
      }
    }
  };

  for (let i = 0; i < crossword.length; i++) {
    for (let j = 0; j < crossword[i].length; j++) {
      if (crossword[i][j] === '-') {
        const type = crossword[i][j + 1];
        if (dfs(i, j - 1, type === '-' ? true : false)) return crossword;
      }
    }
  }
}

console.log(
  crosswordPuzzle(
    [
      ['+', '+', '+', '+', '+', '+', '+', '+', '+', '+'],
      ['+', '-', '-', '-', '-', '-', '-', '+', '+', '+'],
      ['+', '+', '+', '-', '+', '+', '+', '+', '+', '+'],
      ['+', '+', '+', '-', '+', '+', '+', '+', '+', '+'],
      ['+', '+', '+', '-', '-', '-', '-', '-', '+', '+'],
      ['+', '+', '+', '-', '+', '+', '-', '+', '+', '+'],
      ['+', '+', '+', '+', '+', '+', '-', '+', '+', '+'],
      ['+', '+', '+', '+', '+', '+', '-', '+', '+', '+'],
      ['+', '+', '+', '+', '+', '+', '-', '+', '+', '+'],
      ['+', '+', '+', '+', '+', '+', '+', '+', '+', '+']
    ],
    ['POLAND', 'LHASA', 'SPAIN', 'INDIA']
  )
);
