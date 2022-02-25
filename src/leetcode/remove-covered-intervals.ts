var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 1;

  while (i < intervals.length) {
    let current = intervals[i];
    console.log(current);
    if (
      current[0] <= intervals[i - 1][0] &&
      current[1] >= intervals[i - 1][1]
    ) {
      intervals.splice(i - 1, 1);
    } else if (
      current[0] >= intervals[i - 1][0] &&
      current[1] <= intervals[i - 1][1]
    ) {
      intervals.splice(i, 1);
    } else {
      i += 1;
    }
  }

  return intervals.length;
};

console.log(
  removeCoveredIntervals([
    [1, 4],
    [3, 6],
    [2, 8]
  ])
);
// console.log(removeCoveredIntervals([[1, 4], [2, 3]]));
