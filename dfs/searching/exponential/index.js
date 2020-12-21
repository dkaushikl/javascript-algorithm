const InterPolation = require('../interpolation/index.js');

class Exponential {
  static findElement(arr, target, left = 0, right = arr.length - 1) {
    let pos = 0;

    if (left <= right && target >= arr[left] && target <= arr[right]) {
      var firstCondition = right - left;

      var secondCondition = arr[right] - arr[left];

      var thirdCondition = firstCondition / secondCondition;

      var forthCondition = target - arr[left];

      // Math.floor(l + (((r - l) / arr[r] - arr[l]) * target - arr[l]))
      // Math.floor(0 + ((14 / 37) * 8))
      pos = Math.floor(left + thirdCondition * forthCondition);
      console.log('left, right, pos', left, right, pos);
      if (arr[pos] === target) {
        return pos;
      }

      if (arr[pos] < target) {
        return InterPolation.findElement(arr, target, pos + 1, right);
      }

      if (arr[pos] > target) {
        return InterPolation.findElement(arr, target, left, pos - 1);
      }
    }

    return -1;
  }
}

module.exports = Exponential;
