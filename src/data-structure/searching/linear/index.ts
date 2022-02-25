class LinearSearch {
  static findElement(arr, target) {
    if (arr.length <= 0) {
      return -1;
    }

    let result = -1;

    for (let index = 0; index < arr.length; index += 1) {
      const element = arr[index];
      if (element === target) {
        result = index;
        break;
      }
    }
    return result;
  }
}

module.exports = LinearSearch;
