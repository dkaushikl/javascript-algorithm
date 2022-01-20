// Using Sorting and then go one by one to check number is longest consecutive

const findLongestConseqSubseq = (arr: number[], N: number) => {
  arr = Array.from(new Set(arr)).sort((a: number, b: number) => a - b);
  let maxCount = 0;
  let previousNumber = 0;
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (i != 0 && previousNumber + 1 === arr[i]) {
      previousNumber += 1;
      count++;
    } else {
      if (i !== 0) {
        maxCount = Math.max(count, maxCount);
      }

      previousNumber = arr[i];
      count = 1;
    }
  }
  return Math.max(count, maxCount);
};

// Using hashing trick
const findLongestConseqSubseqHashing = (arr: number[], N: number) => {
  let s = new Set();

  // insert all arr element into hash
  for (let i = 0; i < arr.length; i++) s.add(arr[i]);

  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!s.has(arr[i] - 1)) {
      let j = arr[i];

      while (s.has(j)) j++;

      ans = Math.max(ans, j - arr[i]);
    }
  }

  return ans;
};

// Using priority queue   -will solve later since do not know about priority queue.

let sequances = [1, 9, 3, 10, 4, 20, 2];

console.log(findLongestConseqSubseq(sequances, sequances.length));
console.log(findLongestConseqSubseqHashing(sequances, sequances.length));
