// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// return a string index from given array

function linearSearch(arr, num) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === num) return i;
  }
  return -1;
}

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start < end) {
    let mid = math.floor((start + end) / 2);

    if (arr[mid] === num) return mid;

    if (num > arr[mid]) start += 1;

    if (num < arr[mid]) end -= 1;
  }
}

function binarySearch(arr, num, start = 0, end = arr.length - 1) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (num === arr[mid]) return arr[mid];

    if (num > arr[mid]) start = mid + 1;

    if (num < arr[mid]) end = mid - 1;
  }

  return -1;
}

function binarySearchMaximum(arr, num) {
  arr = arr.sort((a, b) => a - b);
  if (arr.length === 0) return 0;

  while (true) {
    let answer = binarySearch(arr, num);

    if (answer !== -1) {
      num = num + num;
    } else break;
  }

  return num;
}

binarySearchMaximum([1, 3, 5, 2, 12], 3);

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
