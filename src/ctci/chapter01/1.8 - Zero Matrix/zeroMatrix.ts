// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, si and s2, write code to check if s2 is a rotation of si using only one call to isSubstring [e.g., "water bottle " is a rotation of 'erbottlewat"),

let map: any = {};

const findZero = (arr: string | any[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        if (!map.row) map.row = [];
        if (!map.column) map.column = [];
        map.row.push(i);
        map.column.push(j);
      }
    }
  }
};

const updateRowZero = (arr: string | any[]) => {
  if (map.row && map.row.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (map.row.includes(i)) {
        for (let j = 0; j < arr[i].length; j++) {
          arr[i][j] = 0;
        }
      }
    }
  }
};

const updateColumnZero = (arr: string | any[]) => {
  if (map.column && map.column.length > 0) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (map.column.includes(j)) {
          arr[i][j] = 0;
        }
      }
    }
  }
};

const zeroMatrix = (arr: string | any[]) => {
  findZero(arr);
  console.log(map);

  updateRowZero(arr);
  updateColumnZero(arr);
};

const result = [
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [1, 0, 1, 0]
];

const arrays = [
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 0],
  [1, 1, 1, 1]
];

zeroMatrix(arrays);
