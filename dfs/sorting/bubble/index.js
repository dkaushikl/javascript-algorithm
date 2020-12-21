class BubbleSort {
  static swapVariable(arr, i) {
    var temp = arr[i + 1];
    arr[i + 1] = arr[i];
    arr[i] = temp;
  }

  static numberSort(arr, n = arr.length) {
    let result = false;

    while (!result) {
      let j = 1;
      for (let i = 0; i < n - 1; i += 1) {
        if (arr[i] > arr[i + 1]) {
          BubbleSort.swapVariable(arr, i);
        } else {
          j += 1;
        }

        if (j === n) {
          result = true;
        }
      }
    }

    return arr;
  }

  static stringSort(arr, n = arr.length) {
    let result = false;

    while (!result) {
      let j = 1;
      for (let i = 0; i < n - 1; i += 1) {
        if (arr[i] > arr[i + 1]) {
          BubbleSort.swapVariable(arr, i);
        } else {
          j += 1;
        }
        if (j === n) {
          result = true;
        }
      }
    }

    return arr;
  }
}

module.exports = BubbleSort;

// bubble([5, 1, 4, 2, 8]);
// bubble([4, 1, 3, 9, 7]);

// sortString(['GeeksforGeeks', 'Quiz', 'Practice', 'GAa', 'Gblogs', 'GAb', 'Coding']);
