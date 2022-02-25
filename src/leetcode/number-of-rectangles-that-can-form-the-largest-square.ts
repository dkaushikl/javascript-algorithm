var countGoodRectangles = function(rectangles) {
  let map = {};
  for (let i = 0; i < rectangles.length; i++) {
    let val =
      rectangles[i][0] > rectangles[i][1] ? rectangles[i][1] : rectangles[i][0];
    map[val] = map[val] ? map[val] + 1 : 1;
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (const item in map) {
    if (max < Number(item)) {
      max = Number(item);
    }
  }
  return map[max];
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [3, 12]
  ])
);
