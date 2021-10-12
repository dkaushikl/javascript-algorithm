const commonElements = (
  arr1: number[],
  arr2: number[],
  arr3: number[],
  n1: number,
  n2: number,
  n3: number
) => {
  let merge = [];
  let i = 0;
  let j = 0;

  while (i < n1 || j < n2) {
    if (arr1[i] === arr2[j]) {
      merge.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) j++;
    else if (arr1[i] < arr2[j]) i++;
  }

  i = 0;
  j = 0;
  let result = [];

  while (i < n1 && j < n2) {
    if (merge[i] === arr3[j]) {
      result.push(merge[i]);
      i++;
      j++;
    } else if (merge[i] > arr3[j]) j++;
    else if (merge[i] < arr3[j]) i++;
  }

  console.log(result);
};

const n1 = [1, 5, 10, 20, 40, 80];
const n2 = [6, 7, 20, 80, 100];
const n3 = [3, 4, 15, 20, 30, 70, 80, 120];
console.log(commonElements(n1, n2, n3, n1.length, n2.length, n3.length));
