const nextGraterElement = (nums1: number[], nums2: number[]) => {
  const map = {};
  const stack = [];

  nums2.forEach(n => {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  });

  console.log(map);
  console.log(stack);
  console.log(nums1.map((n: number) => map[n] || -1));
};

nextGraterElement([4, 1, 2], [1, 3, 4, 2]);
