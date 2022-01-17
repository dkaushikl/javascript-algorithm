const validMountainArray = arr => {
  if (arr.length < 3) return false;

  let isGoingUp = true;
  let isGoingDown = false;

  for (let i = 1; i < arr.length; i++) {
    if (!isGoingDown) {
      if (i === 1 && arr[i] < arr[i - 1]) {
        return false;
      } else if (arr[i] === arr[i - 1]) {
        return false;
      } else if (arr[i] < arr[i - 1]) {
        isGoingDown = true;
        isGoingUp = false;
      }
    } else {
      if (arr[i] >= arr[i - 1]) {
        return false;
      }
    }
  }
  return isGoingUp ? false : true;
};

console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([2, 3, 0, 6]));
console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([3, 5, 4]));
console.log(validMountainArray([14, 82, 89, 84, 79, 70, 3]));
