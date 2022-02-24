var sumOddLengthSubarrays = function(arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   let rowSum = arr[i];
  //   for (let j = i + 1; j < arr.length; j++) {
  //     rowSum += arr[j];
  //     if ((i + j) % 2 === 0) {
  //       sum += rowSum;
  //     }
  //   }
  //   sum += arr[i];
  // }
  // return sum;
};

var sumOddLengthSubarrays1 = function(arr) {
  let oddLength = 1;
  let sum = 0;

  while (oddLength <= arr.length) {
    let currentSum = 0;

    for (let i = 0; i < oddLength; i++) {
      currentSum += arr[i];
    }

    sum += currentSum;

    for (let i = oddLength; i < arr.length; i++) {
      currentSum = currentSum + arr[i] - arr[i - oddLength];
      sum += currentSum;
    }

    oddLength += 2;
  }

  return sum;
};

console.log(sumOddLengthSubarrays1([1, 4, 2, 5, 3]));
