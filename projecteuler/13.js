function largeSum(nums) {
  var pos = nums[0].length;
  var ret = '';
  var num = 0;

  while ((pos -= 1)) {
    for (var i = nums.length; (i -= 1); ) {
      num += Number(nums[i].charAt(pos));
    }
    ret = (num % 10) + ret;
    num = (num / 10) | 0;
  }

  if (num > 0) {
    ret = num + ret;
  }
  return ret.slice(0, 10);
}

largeSum(10);
