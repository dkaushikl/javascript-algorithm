const canPlaceFlowers = function(flowerbed, n) {
  if (n === 0 && flowerbed.length > 0) return true;
  if (n === 0 && flowerbed.length < 0) return false;
  if (flowerbed.length === 1 && flowerbed[0] === 0) return true;
  if (flowerbed.length === 1) return false;

  let count = 0;
  let i = 0;
  while (i < flowerbed.length) {
    if (i === 0) {
      if (flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
        count++;
        flowerbed[i] = 1;
      }
    } else if (i === flowerbed.length - 1) {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
        count++;
        flowerbed[i] = 1;
      }
    } else if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i] === 0
    ) {
      count++;
      flowerbed[i] = 1;
    }

    i++;
    if (count === n) return true;
  }
  return count === n ? true : false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 1, 0, 0], 1));
console.log(canPlaceFlowers([0], 1));
console.log(canPlaceFlowers([1], 1));
console.log(canPlaceFlowers([0, 0], 1));
console.log(canPlaceFlowers([1, 0], 1));
console.log(canPlaceFlowers([1, 0, 1], 1));
console.log(canPlaceFlowers([0], 1));
