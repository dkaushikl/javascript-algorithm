var findPoisonedDuration = function(timeSeries, duration) {
  let count = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] < 1 + duration) {
      count += timeSeries[i] - timeSeries[i - 1];
    } else {
      count += duration;
    }
  }
  return count;
};

console.log(findPoisonedDuration([1, 4], 2));
// console.log(findPoisonedDuration([1, 2], 2));
// console.log(findPoisonedDuration([1, 2, 4, 7, 15, 21, 23], 4));
