function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isChanged = false;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        isChanged = true;
      }
    }

    if (!isChanged) break;
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    // [arr[index], arr[i]] = [arr[], arr[index]];
  }

  console.log(arr);
}

selectionSort([22, 11, 99, 88, 9, 7, 42]);

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

// bubbleSort([5, 1, 2, 4, 6, 10, 12, 15]);
// insertionSort([22, 11, 99, 88, 9, 7, 42]);
