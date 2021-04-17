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

  static numberSortRecursive(arr, i, j) {
    if (i === arr.length - 1) {
      if (j === arr.length - 1) {
        return arr;
      } else {
        return BubbleSort.numberSortRecursive(arr, 0, 0);
      }
    }

    if (arr[i] > arr[i + 1]) {
      BubbleSort.swapVariable(arr, i);
    } else {
      j = j + 1;
    }

    i = i + 1;
    return BubbleSort.numberSortRecursive(arr, i, j);
  }

  static stringSortRecursive(arr, i, j) {
    if (i === arr.length - 1) {
      if (j === arr.length - 1) {
        return arr;
      } else {
        return BubbleSort.stringSortRecursive(arr, 0, 0);
      }
    }

    if (arr[i] > arr[i + 1]) {
      BubbleSort.swapVariable(arr, i, j);
    } else {
      j = j + 1;
    }

    i = i + 1;
    return BubbleSort.stringSortRecursive(arr, i, j);
  }
}

module.exports = BubbleSort;
