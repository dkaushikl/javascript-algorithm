const fourSumCount = (nums1, nums2, nums3, nums4) => {
  let map = {};
  let count = 0;

  nums1.forEach(n1 => {
    nums2.forEach(n2 => {
      let sum = n1 + n2;
      map[sum] = map[sum] + 1 || 1;
    });
  });

  nums3.forEach(n3 => {
    nums4.forEach(n4 => {
      let sum = -(n3 + n4);
      count += map[sum] ? map[sum] : 0;
    });
  });
  return count;
};

console.log(fourSumCount([3, 4], [5, 6], [-18, 7], [-15, 18]));
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
console.log(fourSumCount([0], [0], [0], [0]));
