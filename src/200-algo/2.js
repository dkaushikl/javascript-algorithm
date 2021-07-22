// https://leetcode.com/problems/median-of-two-sorted-arrays/

// Merge Sort
// function medianOfAnArray(nums1, nums2) {
//   let arr = [];
//   let i = 0;
//   let j = 0;

//   while (nums1.length > i && nums2.length > j) {
//     if (nums1[i] < nums2[j]) {
//       arr.push(nums1[i]);
//       i++;
//     } else {
//       arr.push(nums2[j]);
//       j++;
//     }
//   }

//   while (nums1.length > i) {
//     arr.push(nums1[i]);
//     i++;
//   }

//   while (nums2.length > j) {
//     arr.push(nums2[j]);
//     j++;
//   }

//   if (arr.length % 2 === 0) {
//     let median = Math.floor(arr.length / 2);
//     return ((arr[median] + arr[median - 1]) / 2).toFixed(5);
//   } else {
//     let median = Math.floor(arr.length / 2);
//     return arr[median].toFixed(5);
//   }
// }

// Binary Search
var findMedianSortedArrays = function(nums1, nums2) {
  //we decide nums1 is the shorter array.
  if (nums1.length > nums2.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let start = 0;
  let end = nums1.length;

  console.log(nums1);
  console.log(nums2);
  //binary search on shorter list, which determines correct position in second list.
  while (start <= end) {
    let mid1 = Math.floor((start + end) / 2);
    let mid2 = Math.floor((nums1.length + nums2.length + 1) / 2) - mid1;

    console.log(mid1);
    console.log(mid2);
    //account for hitting edges of arrays
    let nums1Left = mid1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[mid1 - 1];
    let nums1Right =
      mid1 == nums1.length ? Number.MAX_SAFE_INTEGER : nums1[mid1];
    let nums2Left = mid2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[mid2 - 1];
    let nums2Right =
      mid2 == nums2.length ? Number.MAX_SAFE_INTEGER : nums2[mid2];

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if ((nums1.length + nums2.length) % 2 == 0) {
        return (
          (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) /
          2
        );
      } else {
        return Math.max(nums1Left, nums2Left);
      }
    }
    if (nums1Left > nums2Right) {
      end = mid1 - 1;
    } else {
      start = mid1 + 1;
    }
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(medianOfAnArray([1, 2], [3, 4]));
