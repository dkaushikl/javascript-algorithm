/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length <= 2) return true;

  let dx = coordinates[1][1] - coordinates[0][1];
  let dy = coordinates[1][0] - coordinates[0][0];

  for (let i = 2; i < coordinates.length; i++) {
    const first = coordinates[i][0] - coordinates[1][0];
    const second = coordinates[i][1] - coordinates[1][1];
    const result = dx * first !== dy * second;
    if (result) return false;
  }
  return true;
};
// @lc code=end

// console.log(
//   checkStraightLine([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 5],
//     [5, 6],
//     [6, 7]
//   ])
// );

console.log(
  checkStraightLine([
    [0, 2],
    [0, 3],
    [0, 0],
    [0, 4],
    [0, -9],
    [0, 5]
  ])
);

// console.log(
//   checkStraightLine([
//     [1, 1],
//     [2, 2],
//     [3, 4],
//     [4, 5],
//     [5, 6],
//     [7, 7]
//   ])
// );
