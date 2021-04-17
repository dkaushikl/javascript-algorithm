// two loop and check first character is greater than secord then swap variable
// otherwise move ahead and at last return arr value which is sorted

function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
}

function bubblesort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

function reverseBubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  console.log(arr);
}

// in selection short you start forloop and create one lower variable which keeps small index of value
// and now go through another elements and check any charater is below than lower value
// if you find any other lower variable then swap otherwise keep as it is avaiable.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallIndex] > arr[j]) {
        smallIndex = j;
      }
    }

    [arr[i], arr[smallIndex]] = [arr[smallIndex], arr[i]];
  }

  console.log(arr);
}

function insertionSort(arr) {
  for (let i = arr + 1; i < arr.length; i++) {
    let currentValue = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    console.log(arr);
  }
}

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// mergeSort([10, 76, 79, 24, 73])
// insertionSort([5, 3, 1, 4, 2]);
// insertionSort([5, 3, 1, 4, 2])
selectionSort([1, 3, 2]);
// reverseBubbleSort([1, 3, 2]);
// bubblesort([1, 3, 2]);
