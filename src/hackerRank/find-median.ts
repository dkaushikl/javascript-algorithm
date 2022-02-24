function findMedian(arr) {
  arr.sort((a, b) => a - b);

  const N = arr.length;
  if (N % 2 === 0) {
    const big = Math.floor(N / 2);
    return (arr[big] + arr[big - 1]) / 2;
  } else {
    return arr[Math.floor(N / 2)];
  }
}

// console.log(findMedian([5, 3, 1, 2, 4]));
console.log(findMedian([5, 3, 1, 2, 4, 6]));
