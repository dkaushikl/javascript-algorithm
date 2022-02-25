var shiftGrid = function(grid, k) {
  let arr = grid.flat();
  while (k > 0) {
    let arr1 = arr.slice(0, arr.length - 1);
    let arr2 = arr.slice(arr.length - 1);
    arr = [...arr2, ...arr1];
    k--;
  }

  let result = [];
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let temp = [];
    console.log(grid[i]);
    for (let j = 0; j < grid[i].length; j++) {
      temp.push(arr[count]);
      count++;
    }
    result.push(temp);
  }

  return result;
};

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    9
  )
);
