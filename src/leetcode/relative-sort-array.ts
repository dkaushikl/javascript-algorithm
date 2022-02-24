var relativeSortArray = function(arr1, arr2) {
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    map[arr1[i]] = map[arr1[i]] ? map[arr1[i]] + 1 : 1;
  }

  let arr = [];
  for (let i = 0; i < arr2.length; i++) {
    let temp = new Array(map[arr2[i]]).fill(Number(arr2[i]));
    delete map[arr2[i]];
    arr.push(...temp);
  }

  for (const item in map) {
    let temp = new Array(map[item]).fill(Number(item));
    arr.push(...temp);
  }

  return arr;
};

console.log(
  relativeSortArray(
    [
      2,
      21,
      43,
      38,
      0,
      42,
      33,
      7,
      24,
      13,
      12,
      27,
      12,
      24,
      5,
      23,
      29,
      48,
      30,
      31
    ],
    [2, 42, 38, 0, 43, 21]
  )
);
