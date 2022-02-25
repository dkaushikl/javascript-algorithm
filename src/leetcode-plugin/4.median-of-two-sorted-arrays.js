// 4. Median of Two Sorted Arrays

// Binary SEARCH
var findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  // Lengths of two arrays
  const m = nums1.length;
  const n = nums2.length;

  // Pointers for binary search
  let start = 0;
  let end = m;

  while (start <= end) {
    let partitionNums1 = Math.floor((start + end) / 2);
    let partitionNums2 = Math.floor((m + n + 1) / 2) - partitionNums1;

    let maxLeftNums1 =
      partitionNums1 === 0
        ? Number.MIN_SAFE_INTEGER
        : nums1[partitionNums1 - 1];
    let minRightNums1 =
      partitionNums1 === m ? Number.MAX_SAFE_INTEGER : nums1[partitionNums1];
    let maxLeftNums2 =
      partitionNums2 === 0
        ? Number.MIN_SAFE_INTEGER
        : nums2[partitionNums2 - 1];
    let minRightNums2 =
      partitionNums2 === n ? Number.MAX_SAFE_INTEGER : nums2[partitionNums2];
  }
};

// console.log(findMedianSortedArrays([8, 9, 10], [1])); // 8.5
// console.log(findMedianSortedArrays([1, 3], [2])); // 2
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
// console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
// console.log(findMedianSortedArrays([], [1])); // 1
// console.log(findMedianSortedArrays([2], [])); // 2

// MERGE SORT
var findMedianSortedArrays1 = (nums1, nums2) => {
  const arr = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] >= nums2[j]) {
      arr.push(nums2[j]);
      j++;
    } else {
      arr.push(nums1[i]);
      i++;
    }
  }

  while (i < nums1.length) {
    arr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    arr.push(nums2[j]);
    j++;
  }

  const N = arr.length;
  const half = Math.floor(N / 2);
  if (N % 2 === 0) {
    return (arr[half] + arr[half - 1]) / 2;
  } else {
    return arr[half];
  }
};

// Use in-built sorted method
var findMedianSortedArrays2 = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const N = arr.length;
  const half = Math.floor(N / 2);
  if (N % 2 === 0) {
    return (arr[half] + arr[half - 1]) / 2;
  } else {
    return arr[half];
  }
};
