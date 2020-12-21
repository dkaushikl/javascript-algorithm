function linearSearchWithForeach(arr, n, k) {
  arr.forEach(x => {
    if (x === k) {
      return 1;
    }
  });
  return -1;
}

function binarySearchWithWhile(arr, k) {
  var start = 0;
  var end = arr.length - 1;

  while (arr[start] !== k && arr[end] !== k) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === k) {
      return middle;
    }

    if (arr[middle] < k) {
      start = middle + 1;
      if (arr[start] === k) {
        return start;
      }
    }

    if (arr[middle] > k) {
      end = middle - 1;
      if (arr[end] === k) {
        return end;
      }
    }
  }
}

function binarySearchWithRecursive(arr, k, start = 0, end = arr.length - 1) {
  if (arr[start] > k || arr[end] < k) {
    return -1;
  }

  var middle = Math.floor((start + end) / 2);

  if (arr[middle] === k) {
    return middle;
  }

  if (arr[middle] < k) {
    start = middle + 1;
    if (arr[start] === k) {
      return start;
    }
  }

  if (arr[middle] > k) {
    end = middle - 1;
    if (arr[end] === k) {
      return end;
    }
  }

  return binarySearchWithRecursive(arr, k, start, end);
}

function test() {
  var arr = [21, 22, 23, 24, 25, 26];
  // var result = binarySearchWithRecursive(arr, 21);
  // var result = binarySearchWithRecursive(arr, 22);
  // var result = binarySearchWithRecursive(arr, 23);
  // var result = binarySearchWithRecursive(arr, 24);
  // var result = binarySearchWithRecursive(arr, 25);
  //  var result = binarySearchWithRecursive(arr, 26);
  console.log(result);
}

// how-to-find-square-root-of-a-large-number-in-ologn-time

// https://www.techiedelight.com/find-square-root-using-binary-search-algorithm/

function findSquareRootOfLargeNumber(n) {
  var i = 1;
  let min = 1;
  let total = min * i;
  while (total < n) {
    total = i * i;
    if (total > n) {
      break;
    }
    if (total <= n) {
      min = i;
    }
    i += 1;
  }
  return min;
}

function findSquareRootOfLargeNumberWithRecursive(n) {}

function findPeakElement(arr) {
  var start = 0;
  var end = arr.length - 1;
  var answer = 0;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] >= arr[start]) {
      start = mid + 1;
      answer = mid;
    }

    if (arr[start] >= arr[answer]) {
      answer = start;
    }

    if (arr[answer] > arr[end]) {
      break;
    }

    console.log('start, end, mid, answer', start, end, mid, answer);
  }

  return arr[answer];
}

function findPeakElementRecursive(arr, start = 0, end = arr.length - 1, answer = 0) {
  console.log('start, end, mid, answer', start, end, mid, answer);

  var mid = Math.floor((start + end) / 2);

  if (arr[mid] < arr[answer]) {
  }

  return findPeakElementRecursive(arr, start, end, answer);
}

function test() {
  var result = findPeakElementRecursive([1, 2, 3, 4, 5]);
  console.log(result);
}

function findPeakElementUnder(arr) {
  var start = 0;
  var end = arr.length - 1;
  var answer = arr.length - 1;

  while (start < end) {
    var mid = Math.floor((start + end) / 2);

    if (arr[mid] < arr[end]) {
      start = mid + 1;
      answer = end;
    }

    if (arr[mid] > arr[end]) {
      end = mid - 1;
      answer = arr[mid] + 1 > arr[mid] ? arr[mid] + 1 : arr[mid];
    }
  }
  return arr[answer];
}

function findPeakElementUnderRecursive(arr, start = 0, end = arr.length - 1, answer = arr.length - 1) {
  if (start >= end) {
    return arr[answer];
  }

  var mid = Math.floor((start + end) / 2);

  if (arr[mid] < arr[end]) {
    start = mid + 1;
    answer = end;
  } else {
    answer = mid;
    return arr[answer];
  }

  return findPeakElementUnderRecursive(arr, start, end, answer);
}

// console.log(findPeakElementUnderRecursive([1, 2, 3, 4, 5]));
// console.log(findPeakElementUnderRecursive([1, 2, 3, 4, 5, 6, 7]));
// console.log(findPeakElementUnderRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

// test();

// console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7]));
// console.log(findPeakElement([1, 2, 3, 4, 5]));
// console.log(findPeakElement([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]));

function searchInSorted(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let answer = -1;

  if (arr[start] === target) {
    return start;
  }

  if (arr[end] === target) {
    return end;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;

      if (arr[start] === target) {
        answer = start;
        break;
      }
    }

    if (arr[mid] > target) {
      end = mid - 1;

      if (arr[end] === target) {
        answer = end;
        break;
      }
    }
  }

  return answer;
}

console.log(searchInSorted([1, 3, 4, 5, 6], 5));
console.log(searchInSorted([1, 3, 4, 5, 6], 6));
console.log(searchInSorted([1, 3, 4, 5, 6], 1));
console.log(searchInSorted([1, 3, 4, 5, 6], 4));
console.log(searchInSorted([1, 3, 4, 5, 6], 3));
