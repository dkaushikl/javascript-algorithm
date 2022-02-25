function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  arr.forEach(x => {
    if (x === 0) {
      zero++;
    } else if (x < 0) {
      negative++;
    } else {
      positive++;
    }
  });
  console.log(positive);
  const N = arr.length;

  if (N === 0) {
    console.log(positive);
    console.log(negative);
    console.log(zero);
  } else {
    console.log((positive / N).toFixed(6));
    console.log((negative / N).toFixed(6));
    console.log((zero / N).toFixed(6));
  }
}

// console.log(plusMinus([1, 1, 0, -1, -1]));
console.log(plusMinus([]));
