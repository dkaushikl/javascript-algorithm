// https://leetcode.com/problems/distribute-candies/
const distributeCandies = candyType => {
  const ableToEat = candyType.length / 2;

  candyType.sort((a, b) => a - b);

  let count = 1;
  for (let i = 1; i < candyType.length; i++) {
    if (candyType[i] !== candyType[i - 1]) count++;
    if (ableToEat < count) return ableToEat;
  }

  return ableToEat >= count ? count : ableToEat;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 2, 2, 3, 3, 4, 4, 4]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
console.log(distributeCandies([1, 2]));
console.log(distributeCandies([2, 2, 2, 3]));
console.log(
  distributeCandies([
    100000,
    0,
    100000,
    0,
    100000,
    0,
    100000,
    0,
    100000,
    0,
    100000,
    0
  ])
);
