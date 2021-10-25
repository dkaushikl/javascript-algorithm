interface ISearch {
  linearSearch(arr: string[], param: string): any;
  binarySearch(arr: number[], param: number): any;
  linearSearchRecursive(arr: string[], param: string): any;
  binarySearchRecursive(
    arr: number[],
    param: number,
    start: number,
    end: number
  ): any;
  jumpSearch(arr: number[], param: number): any;
  jumpSearchRecursive(arr: number[], param: number, jumpNumber: number): any;
  interpolationSearch(arr: number[], param: number);
}

class Search implements ISearch {
  // Sequential Search
  linearSearch = (arr: string[], param: string) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === param) {
        return i;
      }
    }
    return -1;
  };

  // Interval Search
  binarySearch = (arr: number[], param: number) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      if (arr[middle] === param) return middle;

      if (arr[middle] > param) end = middle - 1;

      if (arr[middle] < param) start = middle + 1;
    }

    return -1;
  };

  // Jump sqaure root of array length directly and then linear search
  jumpSearch(arr: number[], param: number) {
    let holdNextElement = -1;
    const jumpNumber = Math.floor(Math.sqrt(arr.length));
    for (let i = 0; i < arr.length; i = i + jumpNumber) {
      if (arr[i] > param) {
        holdNextElement = i;
        break;
      }
    }

    if (holdNextElement === -1) return -1;

    for (let i = holdNextElement - 4; i < holdNextElement; i = i + 1) {
      if (arr[i] === param) return i;
    }

    return -1;
  }

  interpolationSearch(arr: number[], param: number) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const rangeDiff = arr[right] - arr[left];
      const indexDiff = right - left;
      const valueDiff = param - arr[left];

      console.log(left);
      console.log(right);
      console.log(rangeDiff);
      console.log(indexDiff);
      console.log(valueDiff);

      if (valueDiff < 0) return -1;

      if (!rangeDiff) return arr[left] === param ? left : -1;

      const middleIndex =
        left + Math.floor((valueDiff * indexDiff) / rangeDiff);

      if (arr[middleIndex] === param) {
        return middleIndex;
      }

      if (arr[middleIndex] < param) {
        left = middleIndex + 1;
      } else {
        right = middleIndex - 1;
      }
    }

    return -1;
  }

  linearSearchRecursive = (
    arr: string[],
    param: string,
    arrLength: number = arr.length - 1
  ) => {
    if (arr.length <= 0) return -1;

    const lastParams = arr.pop();
    if (lastParams === param) return arrLength;

    return this.linearSearchRecursive(arr, param, arr.length - 1);
  };

  binarySearchRecursive = (
    arr: number[],
    param: number,
    start: number = 0,
    end: number = arr.length - 1
  ) => {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === param) return middle;
    if (start >= end) return -1;
    if (arr[middle] > param)
      return this.binarySearchRecursive(arr, param, start, middle - 1);
    if (arr[middle] < param)
      return this.binarySearchRecursive(arr, param, middle + 1, end);
  };

  jumpSearchRecursive(
    arr: number[],
    param: number,
    start: number = 0,
    end: number = arr.length - 1,
    jumpNumber: number = Math.floor(Math.sqrt(arr.length))
  ) {
    if (arr.length <= 0) return -1;

    const jump = start + jumpNumber;
    if (arr[jump] === param) return jump - 1;
    if (arr[jump] < param) {
      return this.jumpSearchRecursive(arr, param, jump, end, jumpNumber);
    } else {
      start = jump - 4;
      end = jump;

      for (let i = start; i <= end; i++) {
        if (arr[i] === param) return i;
      }

      return -1;
    }
  }
}

const search = new Search();
console.log(search.linearSearch(['a', 'b', 'c', 'd'], 'd'));
console.log(search.binarySearch([1, 2, 3, 4, 5], 2));
console.log(search.binarySearch([1, 2, 3, 4, 5], 6));
console.log(
  search.jumpSearch(
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610],
    55
  )
);
console.log(
  search.interpolationSearch(
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610],
    55
  )
);
console.log(search.linearSearchRecursive(['a', 'b', 'c', 'd'], 'd', 3));
console.log(search.linearSearchRecursive(['1', '2', '3', '4'], '4', 3));
console.log(search.binarySearchRecursive([1, 2, 3, 4, 5], 2));
console.log(search.binarySearchRecursive([1, 2, 3, 4, 5], 6));
console.log(
  search.jumpSearchRecursive(
    [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610],
    55
  )
);
