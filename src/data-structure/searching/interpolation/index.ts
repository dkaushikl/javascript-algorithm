class InterPolationSearch {
  static findElement(arr, target, left = 0, right = arr.length - 1) {
    let pos = 0;

    if (left <= right && target >= arr[left] && target <= arr[right]) {
      const firstCondition = right - left;

      const secondCondition = arr[right] - arr[left];

      const thirdCondition = firstCondition / secondCondition;

      const forthCondition = target - arr[left];

      // Math.floor(l + (((r - l) / arr[r] - arr[l]) * target - arr[l]))
      // Math.floor(0 + ((14 / 37) * 8))
      pos = Math.floor(left + thirdCondition * forthCondition);
      if (arr[pos] === target) {
        return pos;
      }

      if (arr[pos] < target) {
        return InterPolationSearch.findElement(arr, target, pos + 1, right);
      }

      if (arr[pos] > target) {
        return InterPolationSearch.findElement(arr, target, left, pos - 1);
      }
    }

    return -1;
  }
}

module.exports = InterPolationSearch;
