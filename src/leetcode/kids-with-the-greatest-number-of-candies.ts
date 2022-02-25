var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= max ? true : false;
  }

  return candies;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
