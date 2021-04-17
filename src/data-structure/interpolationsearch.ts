function interpolationsearch(arr, target, left = 0, right = arr.length - 1) {
  let pos = 0;

  if (left <= right && target >= arr[left] && target <= arr[right]) {
    var firstCondition = right - left;

    var secondCondition = arr[right] - arr[left];

    var thirdCondition = firstCondition / secondCondition;

    var forthCondition = target - arr[left];

    // Math.floor(l + (((r - l) / arr[r] - arr[l]) * target - arr[l]))
    // Math.floor(0 + ((14 / 37) * 8))
    pos = Math.floor(left + thirdCondition * forthCondition);
    console.log(`left, right, pos`, left, right, pos);
    if (arr[pos] === target) {
      return pos;
    }

    if (arr[pos] < target) {
      return interpolationsearch(arr, target, pos + 1, right);
    }

    if (arr[pos] > target) {
      return interpolationsearch(arr, target, left, pos - 1);
    }
  }

  return -1;
}

console.log(interpolationsearch([10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47], 21));
