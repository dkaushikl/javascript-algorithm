const minimumBribes = q => {
  let swap = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] !== i + 1) {
      if (i >= 0 && q[i - 1] === i + 1) {
        let temp = q[i];
        q[i] = q[i - 1];
        q[i - 1] = temp;
        swap++;
      } else if (i >= 0 && q[i - 2] === i + 1) {
        let temp = q[i - 2];
        q[i - 2] = q[i - 1];
        q[i - 1] = q[i];
        q[i] = temp;
        swap += 2;
      } else {
        return 'Too chaotic';
      }
    }
  }
  return swap;
};

console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]));
console.log(minimumBribes([1, 2, 5, 3, 4, 6, 7, 8]));
console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]));
