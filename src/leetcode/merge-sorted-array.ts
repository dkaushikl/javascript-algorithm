const merge = (nums1, m, nums2, n) => {
  for (let i = nums1.length - m; i > 0; i--) {
    nums1.pop();
  }

  nums1.push(...nums2);

  nums1.sort((a, b) => a - b);
  return nums1;
};

const merge1 = (nums1, m, nums2, n) => {
  const temp = [...nums1];

  let i = 0;
  let j = 0;
  let index = 0;
  while (i < m && j < n) {
    if (temp[i] > nums2[j]) {
      nums1[index++] = nums2[j];
      j++;
    } else {
      nums1[index++] = temp[i];
      i++;
    }
  }

  while (i < m) {
    nums1[index++] = temp[i];
    i++;
  }

  while (j < n) {
    nums1[index++] = nums2[j];
    j++;
  }

  console.log(nums1);
};

console.log(merge1([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(merge1([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
