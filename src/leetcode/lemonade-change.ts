const lemonadeChange = function(bills) {
  const map = {};

  for (const item of bills) {
    if (item === 10 || item === 20) {
      const givenAmount = item - 5;
      if (givenAmount > 5) {
        const devidedAmount = Math.floor(givenAmount / 10);
        if (map[10] >= devidedAmount) {
          map[10] = map[10] - devidedAmount;
          const mod = givenAmount % 10;
          if (mod === 5 && map[mod] > 0) {
            map[mod]--;
          } else {
            return false;
          }
        } else {
          const devide = givenAmount / 5;
          if (map[5] >= devide) {
            map[5] = map[5] - devide;
          } else {
            return false;
          }
        }
      } else {
        if (givenAmount === 5 && map[givenAmount] > 0) {
          map[givenAmount]--;
        } else {
          return false;
        }
      }
    }
    map[item] = map[item] ? map[item] + 1 : 1;
  }
  return true;
};

console.log(lemonadeChange([5, 5, 10, 20, 20]));
console.log(lemonadeChange([10, 10]));
console.log(lemonadeChange([5, 5, 5, 20]));
console.log(lemonadeChange([5, 5, 5, 20]));
console.log(lemonadeChange([20]));
