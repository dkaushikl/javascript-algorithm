var finalValueAfterOperations = function(operations) {
  let count = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '++X' || operations[i] === 'X++') {
      count += 1;
    }

    if (operations[i] === 'X--' || operations[i] === '--X') {
      count -= 1;
    }
  }

  return count;
};

console.log(
  finalValueAfterOperations(['--X', 'X++', 'X++', '--X', 'X++', 'X++'])
);
