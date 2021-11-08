const findMinDiff = (arr: number[], n: number, m: number) => {
  arr = [...new Set(arr)].sort((a, b) => a - b);
  console.log(arr);
  let i = 0;
  let j = i + (m - 1);

  let minDiff = Number.MAX_SAFE_INTEGER;
  while (true) {
    minDiff = Math.min(arr[j] - arr[i], minDiff);

    if (j < n) j++;

    if (j >= n && i < n - (m - 1)) {
      i++;
      j = i + (m - 1);
    }
    if (i >= n - (m - 1)) break;
  }

  return minDiff;
};

const packets = [
  12,
  4,
  7,
  9,
  2,
  23,
  25,
  41,
  30,
  30,
  40,
  28,
  42,
  44,
  48,
  43,
  50
];
const m = 7;

// const packets = [3, 4, 1, 9, 56, 7, 9, 12];
// const m = 5;

// const packets = [7, 3, 2, 4, 9, 12, 56];
// const m = 3;

console.log(findMinDiff(packets, packets.length, m));

// Answer should be 10.
