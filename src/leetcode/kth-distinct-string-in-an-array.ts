var kthDistinct = function(arr, k) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
  }

  let count = 0;
  for (const item in map) {
    if (map[item] <= 1) count++;
    if (count === k) return item;
  }

  return '';
};

console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2));
console.log(kthDistinct(['aaa', 'aa', 'a'], 1));
