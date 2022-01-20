const rearrange = arr => {
  let maxResult = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    maxResult = Math.max(sum, maxResult);

    if (i !== arr.length - 1) {
      for (let j = i + 1; j < arr.length; j++) {
        sum = arr[j] + sum;
        maxResult = Math.max(sum, maxResult);
      }
    }
  }

  return maxResult;
};

// Kadane's Algorithm
const rearrange2 = arr => {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item > sum) {
      sum = sum < 0 ? item : item + sum;
    } else {
      sum += item;
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};
