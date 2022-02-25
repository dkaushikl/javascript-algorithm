var maximumEvenSplit = function(finalSum) {
  if (finalSum % 2 !== 0) return [];

  let sum = 0;
  let n = 2;
  let set = new Set();

  while (sum < finalSum) {
    sum += n;
    set.add(n);
    n += 2;
  }

  set.delete(sum - finalSum);
  return [...set];
};

// console.log(maximumEvenSplit(12));

console.log(maximumEvenSplit(42));
console.log(maximumEvenSplit(44));
console.log(maximumEvenSplit(46));
console.log(maximumEvenSplit(48));
console.log(maximumEvenSplit(50));
console.log(maximumEvenSplit(52));
console.log(maximumEvenSplit(54));
console.log(maximumEvenSplit(56));
console.log(maximumEvenSplit(58));
// console.log(maximumEvenSplit(28));
// console.log(maximumEvenSplit(7));

// console.log(maximumEvenSplit(1500));
// console.log(maximumEvenSplit(10000));
// console.log(maximumEvenSplit(252));
