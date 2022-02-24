/*
 * @lc app=leetcode id=1812 lang=javascript
 *
 * [1812] Determine Color of a Chessboard Square
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  if ((coordinates[0].charCodeAt() - 97) % 2 === coordinates[1] % 2)
    return true;
  return false;
};
// @lc code=end

console.log(squareIsWhite('a1'));
console.log(squareIsWhite('a2'));
console.log(squareIsWhite('b1'));
console.log(squareIsWhite('b2'));
console.log(squareIsWhite('h3'));
console.log(squareIsWhite('c7'));
