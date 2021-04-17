class InsertionSort {
  static swapVariable(arr, i, j) {
    var temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  static numberSort(arr) {
    for (let i = 1; i <= arr.length - 1; i += 1) {
      let min = 0;
      for (let j = i - 1; j < 0; j -= 1) {
        if (arr[j] > arr[i]) {
          min = j;
        }
      }

      InsertionSort.swapVariable(arr, i, min);
    }
    console.log(arr);
  }
}

module.exports = InsertionSort;

InsertionSort.numberSort([5, 1, 4, 3, 2]);
