const gridTraveler = (row, col, memo = {}, count = 0) => {
  if (memo[`${row}-${col}`]) return memo[`${row}-${col}`];
  if (row === 0 || col === 0) return null;
  if (row === 1 && col === 1) return 1;

  count += gridTraveler(row - 1, col, memo);
  count += gridTraveler(row, col - 1, memo);

  memo[`${row}-${col}`] = count;
  return count;
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
console.log(gridTraveler(25, 25));
