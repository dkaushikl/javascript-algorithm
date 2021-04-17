// https://towardsdatascience.com/powerful-ultimate-binary-search-template-and-many-leetcode-problems-1f850ef9565144
// https://www.techiedelight.com/find-square-root-using-binary-search-algorithm/
// https://leetcode.com/problems/sqrtx/
// https://practice.geeksforgeeks.org/problems/count-squares3649/1
// https://leetcode.com/problems/search-insert-position/
// https://www.mbacrystalball.com/blog/2015/10/23/powers-and-roots/

class BinarySearch {
  static whileLoop(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    let result = -1;
    while (arr[start] !== k && arr[end] !== k) {
      let middle = Math.floor((start + end) / 2);

      if (arr[middle] === k) {
        result = middle;
        break;
      }

      if (arr[middle] < k) {
        start = middle + 1;
        if (arr[start] === k) {
          result = start;
          break;
        }
      }

      if (arr[middle] > k) {
        end = middle - 1;
        if (arr[end] === k) {
          result = end;
          break;
        }
      }
    }

    return result;
  }

  static recursive(arr, k, start = 0, end = arr.length - 1) {
    if (arr[start] > k || arr[end] < k) {
      return -1;
    }

    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === k) {
      return middle;
    }

    if (arr[middle] < k) {
      start = middle + 1;
      if (arr[start] === k) {
        return start;
      }
    }

    if (arr[middle] > k) {
      end = middle - 1;
      if (arr[end] === k) {
        return end;
      }
    }

    return BinarySearch.recursive(arr, k, start, end);
  }

  static findSquareRootOfLargeNumber(n) {
    let i = 1;
    let min = 1;
    let total = min * i;
    while (total < n) {
      total = i * i;
      if (total > n) {
        break;
      }
      if (total <= n) {
        min = i;
      }
      i += 1;
    }
    return min;
  }

  static findPeakElement(arr) {
    let start = 0;
    let end = arr.length - 1;
    let answer = 0;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] >= arr[start]) {
        start = mid + 1;
        answer = mid;
      }

      if (arr[start] >= arr[answer]) {
        answer = start;
      }

      if (arr[answer] > arr[end]) {
        break;
      }
    }

    return arr[answer];
  }

  static mySqrt(n) {
    let i = 1;
    let total = 1;
    let min = 0;
    while (n > total) {
      if (i * i <= n) {
        min = i;
      }
      i += 1;
    }

    return min;
  }

  static mySqrt2(n) {
    if (n === 0 || n === 1) {
      return n;
    }

    let start = 1;
    let end = n;
    let ans = 0;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (mid * mid === n) {
        return mid;
      }

      if (mid * mid < n) {
        start = mid + 1;
        ans = mid;
      } else {
        end = mid - 1;
      }
    }
    return ans;
  }

  static countSquare(n) {
    let start = 1;
    let end = n;
    let ans = 0;
    while (start <= end) {
      let sum = (start + end) / 2;
      let mid = Math.floor(sum);

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

  static countSquareWhile(n) {
    let i = 0;
    let total = 0;
    while (n > total) {
      total = i * i;
      if (total === n) {
        break;
      }
      i += 1;
    }
    return i - 1;
  }

  static countSquareRecursive(n, l = 1, r = n) {
    if (r <= l) {
      return -1;
    }

    let m = Math.floor((l + r) / 2);
    if (m * m === n) {
      return m - 1;
    }

    if (m * m < n) {
      return BinarySearch.countSquareRecursive(n, m + 1, r);
    }

    if (m * m > n) {
      return BinarySearch.countSquareRecursive(n, l, m - 1);
    }
  }

  static myPow(x, n) {
    if (n < 0) {
      n = Math.abs(n);
      x = 1 / x;
    }

    if (n === 0) {
      return 1;
    }

    let half = BinarySearch.myPow(x, Math.floor(n / 2));
    return n % 2 === 0 ? half * half : half * half * x;
  }

  static twoSum(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      let total = arr[start] + arr[end];

      if (target > total) {
        start += 1;
      } else if (total > target) {
        end -= 1;
      }
    }
    return [start + 1, end + 2];
  }

  static searchRange(nums, target) {
    if (nums.length <= 0) {
      return [-1, -1];
    }
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;
    while (start < end) {
      mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) {
        if (nums[mid + 1] === target) {
          return [mid, mid + 1];
        }

        if (nums[mid - 1] === target) {
          return [mid - 1, mid];
        }
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

  static divide(dividend, divisor) {
    if (dividend === 0) {
      return 0;
    }

    let sign = dividend < 0 || divisor < 0 ? -1 : 1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quodrant = 0;

    while (dividend >= divisor) {
      dividend -= divisor;
      quodrant += 1;
    }

    return sign * quodrant;
  }

  /*eslint max-depth: 0 */
  static searchMatrixBinary(matrix, target) {
    let start = 0;
    let end = matrix[0].length - 1;
    let result = false;

    let endMatrix = matrix[matrix.length - 1];
    if (endMatrix[endMatrix.length - 1] < target) {
      return;
    }

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]) {
        let arr = matrix[mid];
        let start2 = 0;
        let end2 = arr.length - 1;

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

    return result;
  }

  static searchMatrix(matrix, target, l = 0, r = matrix.length - 1) {
    if (l > r) {
      return false;
    }

    let mid = Math.floor((l + r) / 2);

    if (matrix[mid] === target) {
      return true;
    }

    if (target < matrix[mid]) {
      return BinarySearch.searchMatrix(matrix, target, l, mid - 1);
    }

    if (matrix[mid] < target) {
      return BinarySearch.searchMatrix(matrix, target, mid + 1, r);
    }
  }

  static searchMatrixRecursive(matrix, target, l = 0, r = matrix.length - 1) {
    if (l > r) {
      return false;
    }

    let mid = Math.floor((l + r) / 2);

    if (target >= matrix[mid][0] && matrix[mid][0] <= target) {
      return BinarySearch.searchMatrix(matrix[mid], target);
    }

    if (target < matrix[mid][0]) {
      return BinarySearch.searchMatrixRecursive(matrix, target, l, r - 1);
    }

    if (target > matrix[mid][0]) {
      return BinarySearch.searchMatrixRecursive(matrix, target, l + 1, r);
    }
  }
}

module.exports = BinarySearch;
