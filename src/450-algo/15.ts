const minJump = (arr, n = arr.length) => {
  let track = 0;
  let previousSum = 0;
  let i = 1;

  while (true) {
    previousSum = i;
    i = previousSum + arr[i];
    track++;

    console.log(i);
    console.log(previousSum);
    console.log(track);

    if (i >= n) return track;
  }
};

// console.log(minJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
console.log(minJump([1, 4, 3, 2, 6, 7]));
