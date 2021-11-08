const guessNumber = (right: number) => {
  let left = 1;

  while (true) {
    const mid = Math.floor((left + right) / 2);
    const result = guess(mid, 2);
    if (result === 0) return mid;

    result === 1 ? (left = mid + 1) : (right = mid - 1);
  }
};

function guess(median: number, guessAnswer: number) {
  if (median === guessAnswer) return 0;
  if (guessAnswer > median) return 1;
  else return -1;
}

console.log(guessNumber(2));
