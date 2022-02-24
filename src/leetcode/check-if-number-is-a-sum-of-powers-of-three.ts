var sumOfThree = function(num) {
  if (num % 3 === 0) {
    let devideThree = num / 3;
    return [devideThree - 1, devideThree, devideThree + 1];
  } else {
    return [];
  }
};

console.log(sumOfThree(0));
console.log(sumOfThree(1));
console.log(sumOfThree(2));
console.log(sumOfThree(3));
console.log(sumOfThree(6));
console.log(sumOfThree(4));
console.log(sumOfThree(75));
console.log(sumOfThree(33));
console.log(sumOfThree(45));
console.log(sumOfThree(66));
console.log(sumOfThree(49));
console.log(sumOfThree(57));
console.log(sumOfThree(567891234));
console.log(sumOfThree(99));
console.log(sumOfThree(100));
console.log(sumOfThree(100));
console.log(sumOfThree(99999));
console.log(sumOfThree(555555));
console.log(sumOfThree(1000000000000000 - 1));
console.log(sumOfThree(0));
console.log(sumOfThree(9));
console.log(sumOfThree(10));
console.log(sumOfThree(3));
console.log(sumOfThree(33));
console.log(sumOfThree(1000000000000000));
