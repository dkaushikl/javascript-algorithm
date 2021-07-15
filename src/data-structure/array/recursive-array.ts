export class Array {
  sumTriangle = (nums: number[], length: number = nums.length) => {
    if (length <= 1) return;

    const tempArr = [];

    for (let i = 0; i < nums.length - 1; i++) {
      tempArr.push(nums[i] + nums[i + 1]);
    }

    this.sumTriangle(tempArr, tempArr.length);
    console.log(tempArr);
  };

  findMinMax = (nums: number[], length: number = nums.length) => {
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    if (length <= 0) return [min, max];

    // tslint:disable-next-line:no-shadowed-variable
    const findMinMaxRecursive = (
      nums: number[],
      length: number = nums.length
    ) => {
      if (length <= 0) return;

      const val = nums.pop();
      min = Math.min(val, min);
      max = Math.max(val, max);
      findMinMaxRecursive(nums, nums.length);
    };

    findMinMaxRecursive(nums, nums.length);
    return [min, max];
  };

  // tslint:disable-next-line:no-shadowed-variable
  possibleCombinations = (
    arr: number[],
    result = [],
    primIndex: number = 0,
    currIndex: number = 1,
    r = 2
  ) => {
    if (primIndex >= arr.length) return;

    if (currIndex >= arr.length) {
      primIndex++;
      this.possibleCombinations(arr, result, primIndex, (primIndex += 1));
    } else {
      result.push([arr[primIndex], arr[currIndex]]);
      this.possibleCombinations(arr, result, primIndex, currIndex + 1);
    }

    return result;
  };

  permutation = (s: string, length: number = s.length) => {
    // const result = [];
    // const swap = () => {};
    // const permutationRecursive = (s, l, r) => {
    //   if (l === r) {
    //     console.log(s);
    //   } else {
    //     for (let i = 0; i < array.length; i++) {
    //       const element = array[i];
    //     }
    //   }
    // };
    // permutationRecursive(s, 0, length - 1);
    // return result;
  };

  printAllIncreasingSequance = (k: number, n: number, len = 0, result = []) => {
    // tslint:disable-next-line:no-shadowed-variable
    const printArr = (arr: any, k: number) => {
      for (let i = 0; i < k; i++) console.log(arr[i] + ' ');
    };

    // tslint:disable-next-line:no-shadowed-variable
    const printSeqUtil = (n: number, k: number, len = 0, result = []) => {
      if (len === k) {
        printArr(arr, k);
        return;
      }

      let i = len === 0 ? 1 : result[len - 1] + 1;
      while (i <= n) {
        result[len - 1] = i;
        printSeqUtil(n, k, len, result);
        i++;
      }

      len--;
    };

    printSeqUtil(n, k, len);
    return result;
  };
}

const arr = new Array();
arr.sumTriangle([1, 2, 3, 4, 5]);
console.log(arr.possibleCombinations([1, 2, 3]));
console.log(arr.findMinMax([1, 2, 7, 8, 5]));
console.log(arr.permutation('ABC'));
// console.log(arr.printAllIncreasingSequance(2, 3));
console.log(arr.printAllIncreasingSequance(3, 7));
// console.log(arr.printAllIncreasingSequance(5, 5));

// ABCD
// ADCB
// ABDC
// ACDB
// ACBD
// ADBC
