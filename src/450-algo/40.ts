const medianOfTwoSortedArraysOfEqualSize = (arr1: number[], arr2: number[]) => {
  let arr: number[] = [];
  let sumOfArr = arr1.length + arr2.length;
  let total = sumOfArr % 2 === 0 ? sumOfArr / 2 : Math.trunc(sumOfArr / 2);
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      arr.push(arr2[j]);
      j++;
    } else {
      arr.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  return arr[total];
};

console.log(
  medianOfTwoSortedArraysOfEqualSize(
    [-5, 3, 6, 12, 15],
    [-12, -10, 6, 10, 12, 15]
  )
);
