var largestAltitude = function(gain) {
  let max = 0;
  let previous = 0;

  for (let i = 0; i < gain.length; i++) {
    previous -= -gain[i];
    max = Math.max(previous, max);
  }

  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
