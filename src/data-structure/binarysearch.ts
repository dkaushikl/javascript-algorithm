// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// https://leetcode.com/problems/search-insert-position/

// function searchInsert(nums, target) {
//     var start = 0;
//     var end = nums.length - 1;

//     while (start <= end) {
//         var middle = Math.floor((start + end) / 2);

//         if (nums[middle] === target)
//             return middle;

//         if (nums[middle] < target)
//             start = middle + 1;
//         else
//             end = middle - 1;
//     }
// };

// console.log(searchInsert([1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 17));

// first set start and end value
// then set for loop or while loop until you find result
// set condition if your
// then find middle by deviding index by 2
// if array middle is equal to target value then return index.
// and if array middle is less than value then increase 1 to middle value and assign it to start value
// and if array middle is grater than value then decrease 1 from end value and assign it to end value.

// for find 7
// start - 0, end - 5
// while loop -
// middle - 3
// start - (middle + 1)
// middle - 4
// return index;

// https://leetcode.com/problems/sqrtx/

function mySqrt(n) {
  var i = 1;
  var total = 1;
  var min = 0;
  while (n > total) {
    if (i * i <= n) min = i;
    i++;
  }
  console.log(min);
}

// https://practice.geeksforgeeks.org/problems/count-squares3649/1

function countSquare(n) {
  let start = 1;
  let end = n;
  let ans = 0;
  while (start <= end) {
    var sum = (start + end) / 2;
    var mid = Math.floor(sum);

    console.log(`start, end, mid`, start, end, mid);

    if (mid * mid === n) {
      ans = mid;
    }

    if (mid * mid < n) {
      start = mid + 1;

      if (start * start === n) {
        ans = start;
      }
    } else {
      end = mid - 1;

      if (end * end === n) {
        ans = end;
      }
    }
  }

  return ans - 1;
}

function countSquareWhile(n) {
  var i = 0;
  let total = 0;
  while (n > total) {
    total = i * i;
    if (total === n) {
      break;
    }
    i++;
  }
  return i - 1;
}

// console.log(countSquareWhile(225));

function mySqrt2(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  var start = 1,
    end = n,
    ans = 0;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (mid * mid == n) return mid;

    if (mid * mid < n) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

// console.log(mySqrt2(168));

// Two Sum II - Input array is sorted

function twoSum(arr, target) {
  var start = 0;
  var end = arr.length - 1;

  while (start < end) {
    var total = arr[start] + arr[end];

    if (target > total) {
      start++;
    } else if (total > target) {
      end--;
    } else {
      console.log(`start, end`, start, end);
      break;
    }
  }
  return [start + 1, end + 2];
}

// console.log(twoSum([2, 7, 12, 14], 17));

function searchRange(nums, target) {
  if (nums.length <= 0) return [-1, -1];
  var start = 0;
  var end = nums.length - 1;
  var mid = 0;
  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      if (nums[mid + 1] === target) return [mid, mid + 1];

      if (nums[mid - 1] === target) return [mid - 1, mid];
    }

    if (nums[mid] < target) {
      start = mid + 1;
    }

    if (nums[mid] > target) {
      end = mid - 1;
    }
  }
  return [mid, start];
}

// console.log(searchRange([1, 1], 1));

function divide(dividend, divisor) {
  if (dividend === 0) return INT;

  var sign = dividend < 0 || divisor < 0 ? -1 : 1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  var quodrant = 0;

  while (dividend >= divisor) {
    dividend -= divisor;
    quodrant++;
  }

  return sign * quodrant;
}

// console.log(divide(7, -3));

function searchInsert(nums, target) {
  var start = 0;
  var end = nums.length - 1;
  var result = 0;

  if (nums[end] < target) return end + 1;

  while (start < end) {
    var mid = Math.floor((start + end) / 2);
    // console.log(`start, end, mid, result`, start, end, mid, result);
    if (nums[mid] === target) {
      result = mid;
      break;
    }

    if (nums[mid] < target) {
      start = mid + 1;

      if (nums[start] === target) {
        result = start;
        break;
      }
    }

    if (nums[mid] > target) {
      end = mid - 1;

      if (nums[mid] > target && nums[end] < target) {
        result = end + 1;
        break;
      }
    }

    // console.log(`start, end, mid, result`, start, end, mid, result);1
  }

  return result;
}

// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6], 7));
// console.log(searchInsert([1,3,5,6], 0));
// console.log(searchInsert([1], 0));

// console.log(searchInsert([1,3,5,6], 1));
// console.log(searchInsert([1,3,5,6], 3));
// console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 6));

// https://towardsdatascience.com/powerful-ultimate-binary-search-template-and-many-leetcode-problems-1f850ef9565144

function myPow(x, n) {
  if (n < 0) {
    n = Math.abs(n);
    x = 1 / x;
  }

  if (n == 0) return 1;

  let half = myPow(x, Math.floor(n / 2));
  console.log(half);
  return n % 2 == 0 ? half * half : half * half * x;
}

// https://www.mbacrystalball.com/blog/2015/10/23/powers-and-roots/

// console.log(myPow(2, 10));
// console.log(myPow(2, -2));

function searchMatrix(matrix, target) {
  var start = 0;
  var end = matrix[0].length - 1;
  var result = false;

  var endMatrix = matrix[matrix.length - 1];
  if (endMatrix[endMatrix.length - 1] < target) {
    console.log(result);
    return;
  }

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]) {
      let arr = matrix[mid],
        start2 = 0,
        end2 = arr.length - 1;

      while (start2 <= end2) {
        let mid2 = Math.floor((start2 + end2) / 2);

        if (arr[mid2] === target) {
          result = true;
          break;
        }

        if (arr[mid2] > target) {
          end2 = mid2 - 1;

          if (arr[end2] === target) {
            result = true;
            break;
          }
        }

        if (arr[mid2] < target) {
          start2 = mid2 + 1;

          if (arr[start2] === target) {
            result = true;
            break;
          }
        }
      }

      break;
    }

    if (matrix[mid][0] > target) {
      end = mid - 1;
    }

    if (matrix[mid][matrix[mid].length - 1] < target) {
      start = mid + 1;
    }
  }

  console.log(result);
}

// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 1)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 2)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 4)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 5)

// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 10)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 11)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 14)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 17)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 20)

// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 21)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 22)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 23)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 24)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 31)
// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 37)

// searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 53)

// function searchInsert(arr, target, n = arr.length, start = 0, end = n - 1) {
//     if (end >= 1) {
//         var mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target)
//             return mid;

//         if (arr[mid] > target)
//             return searchInsert(arr, target, arr.length, start, end - 1);

//         if (arr[mid] < target)
//             return searchInsert(arr, target, arr.length, start + 1,);
//     }

//     return -1;
// }

// console.log(searchInsert([1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 3));

// function countSquareRecursive(n, l = 1, r = n) {
//     if (r <= l) return -1;

//     var m = Math.floor((l + r) / 2);
//     if (m * m === n)
//         return m - 1;

//     if (m * m < n)
//         return countSquareRecursive(n, m + 1, r)

//     if (m * m > n)
//         return countSquareRecursive(n, l, m - 1)
// }

// console.log(countSquareRecursive(4));
// console.log(countSquareRecursive(5));
// console.log(countSquareRecursive(6));
// console.log(countSquareRecursive(7));
// console.log(countSquareRecursive(8));
// console.log(countSquareRecursive(9));
// console.log(countSquareRecursive(10));
// console.log(countSquareRecursive(11));
// console.log(countSquareRecursive(12));
// console.log(countSquareRecursive(13));
// console.log(countSquareRecursive(14));
// console.log(countSquareRecursive(15));
// console.log(countSquareRecursive(16));

// function binarySearch(matrix, target, l = 0, r = matrix.length - 1) {
//     if (l > r) return false;

//     var mid = Math.floor((l + r) / 2);

//     if (matrix[mid] === target)
//         return true;

//     if (target < matrix[mid]) {
//         return binarySearch(matrix, target, l, mid - 1)
//     }

//     if (matrix[mid] < target) {
//         return binarySearch(matrix, target, mid + 1, r)
//     }
// }

// function searchMatrixRecursive(matrix, target, l = 0, r = matrix.length - 1) {
//     if (l > r) return false;

//     var mid = Math.floor((l + r) / 2);

//     if (target >= matrix[mid][0] && matrix[mid][0] <= target) {
//         return binarySearch(matrix[mid], target)
//     }

//     if (target < matrix[mid][0])
//         return searchMatrixRecursive(matrix, target, l, r - 1)

//     if (target > matrix[mid][0])
//         return searchMatrixRecursive(matrix, target, l + 1, r)
// }

// console.log(searchMatrixRecursive([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 1));
// console.log(searchMatrixRecursive([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 2));
// console.log(searchMatrixRecursive([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3));
// console.log(searchMatrixRecursive([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 4));
// console.log(searchMatrixRecursive([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 5));
