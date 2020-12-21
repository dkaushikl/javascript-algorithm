function swapVariable(arr, i) {
  var temp = arr[i + 1];
  arr[i + 1] = arr[i];
  arr[i] = temp;
}

function bubble(arr, n = arr.length) {
  let result = false;

  while (!result) {
    let j = 1;
    for (let i = 0; i < n - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swapVariable(arr, i);
      } else {
        j++;
      }

      if (j === n) {
        result = true;
      }
    }
  }
  console.log(arr);
}

// bubble([5, 1, 4, 2, 8]);
// bubble([4, 1, 3, 9, 7]);

function sortString(arr, n = arr.length) {
  let result = false;

  while (!result) {
    let j = 1;
    for (let i = 0; i < n - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swapVariable(arr, i);
      } else {
        j++;
      }
      if (j === n) {
        result = true;
      }
    }
  }
  console.log(arr);
}

function bubbleSortRecursive() {}

sortString(['GeeksforGeeks', 'Quiz', 'Practice', 'GAa', 'Gblogs', 'GAb', 'Coding']);
