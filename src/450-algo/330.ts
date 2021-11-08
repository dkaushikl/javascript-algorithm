const sumMinAndMax = (arr, k) => {
  const sliceArr = arr.slice(0, k);

  // let min = Number.MAX_SAFE_INTEGER;
  // let max = Number.MIN_SAFE_INTEGER;

  // for (const item of sliceArr) {
  //     min = Math.min(item, min);
  //     max = Math.max(item, max);
  // }

  const stack = [];

  for (let i = k; i < arr.length; i++) {}
};

console.log(sumMinAndMax([2, 5, -1, 7, -3, -1, -2], 4));
