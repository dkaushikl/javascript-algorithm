/*
 * @lc app=leetcode id=881 lang=javascript
 *
 * [881] Boats to Save People
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);

  let i = 0;
  let j = people.length - 1;
  let count = 0;

  while (i <= j) {
    count++;

    if (people[i] + people[j] <= limit) i++;

    j--;
  }

  return count;
};

// console.log(numRescueBoats([1, 3], 1));
// console.log(numRescueBoats([1, 2], 3));
// console.log(numRescueBoats([3, 2, 2, 1], 3));
// console.log(numRescueBoats([3, 5, 3, 4], 4));
// console.log(numRescueBoats([4, 5, 2], 5));
// @lc code=end
