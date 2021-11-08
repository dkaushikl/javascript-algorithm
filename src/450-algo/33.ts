const find3Numbers = (a: number[], n: number, x: number) => {
  let i = 0;
  let j = i + 1;
  let k = i + 2;

  const arr: any = [];
  while (true) {
    let sum = a[i] + a[j] + a[k];

    if (sum === x) {
      arr.push([a[i], a[j], a[k]]);
    }

    if (k <= n - 1) k++;

    if (k === n && j <= n - 2) {
      j++;
      k = j + 1;
    }

    if (j === n - 1 && i < n - 2) {
      i++;
      j = i + 1;
      k = j + 1;
    }

    if (i === n - 2) break;
  }

  return arr;
};

const arr = [5, 8, 5, 4, 7, 6, 10, 1];
const x = 13;
console.log(find3Numbers(arr, arr.length, x));
