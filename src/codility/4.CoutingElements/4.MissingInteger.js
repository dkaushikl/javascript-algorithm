function Solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let max = A[0];
  let hash = {};

  A.forEach(e => {
    max = Math.max(max, e);
    hash[e] = true;
  });

  if (max < 1) {
    return 1;
  } else {
    for (let i = 1; i <= max; i++) {
      if (!hash[i]) {
        return i;
      }
    }

    return max + 1;
  }
}

console.log(Solution([1, 3, 6, 4, 1, 2]));
// console.log(Solution([1, 2, 3]));
// console.log(Solution([-1, -3]));
