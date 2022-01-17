const flipAndInvertImage = function(image) {
  let i = 0;
  while (i < image.length) {
    let j = 0;
    let k = image[i].length - 1;
    while (j < k) {
      const temp = image[i][j];
      image[i][j] = image[i][k];
      image[i][k] = temp;
      j++;
      k--;
    }

    j = 0;
    k = image[i].length - 1;
    while (j <= k) {
      if (j === k) {
        image[i][j] = image[i][j] === 1 ? 0 : 1;
      } else {
        image[i][j] = image[i][j] === 1 ? 0 : 1;
        image[i][k] = image[i][k] === 1 ? 0 : 1;
      }
      j++;
      k--;
    }

    i++;
  }
  return image;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
  ])
);
