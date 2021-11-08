const palindromicArray = (args: number[]) => {
  for (let i = 0; i < args.length; i++) {
    let num = args[i].toString();
    if (num.length > 1) {
      let j = 1;
      let firstChar = num[0];
      while (j < num.length) {
        if (num.charAt(j) !== firstChar) {
          return false;
        }
        j++;
      }
    }
  }

  return true;
};

console.log(palindromicArray([111, 222, 333, 444, 555]));
console.log(palindromicArray([121, 131, 20]));
