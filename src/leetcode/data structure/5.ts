// o(nlogn) + o(nlogn) + o(m) + o(n)
const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  const result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) i++;
    else if (nums1[i] > nums2[j]) j++;
    else {
      result.push(nums1[i]);
      i++;
      j++;
    }
  }

  return result;
};

const intersect1 = (nums1, nums2) => {
  const map = {};

  for (const item of nums1) {
    if (map[item]) map[item] += 1;
    else map[item] = 1;
  }

  const result = [];
  for (const item of nums2) {
    if (map[item] > 0) {
      result.push(item);
      map[item]--;
    }
  }

  return result;
};

// console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect1([4, 9, 5], [9, 4, 9, 8, 4]));
