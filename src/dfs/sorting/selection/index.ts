class SelectionSort {
  static numberSort(arr, n = arr.length) {
    for (let i = 0; i < arr.length; i += 1) {
      let min = i;
      for (let j = i + 1; j < n; j += 1) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }

      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }

    return arr;
  }

  static stringSort(arr, n = arr.length) {
    for (let i = 0; i < n - 1; i += 1) {
      var min = i;
      for (let j = i + 1; j < n; j += 1) {
        if (arr[min][0] > arr[j][0]) {
          min = j;
        }
      }

      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }

    return arr;
  }
}

module.exports = SelectionSort;

// selectionSort([15, 20, 11, 30, 14, 17, 28]);
// stringSort(['paper', 'sort', 'floopy', 'abc', 'def', 'zym']);
