class JumpSearch {
  static findElement(arr, target, left = 0, jump = Math.floor(Math.sqrt(arr.length))) {
    if (arr[left] === target) {
      return left;
    }
    if (arr[arr.length - 1] === target) {
      return arr.length - 1;
    }

    while (arr[left] <= target) {
      if (arr[left] === target) {
        return left;
        break;
      }

      if (arr[left] < target) {
        left = left + jump;
      }
    }

    left -= jump;

    let result = -1;
    while (arr[left] <= target) {
      if (arr[left] === target) {
        result = left;
        break;
      }

      if (arr[left] < target) {
        left += 1;
      }
    }
    return result;
  }
}

module.exports = JumpSearch;
