var maximumUnits = function(boxTypes, truckSize) {
  const bucket = new Uint16Array(1001);
  console.log(bucket);
  let ret = 0;
  let max = 0;
  for (let i = 0; i < boxTypes.length; ++i) {
    bucket[boxTypes[i][1]] += boxTypes[i][0];
    boxTypes[i][1] > max && (max = boxTypes[i][1]);
  }
  //  console.log(bucket);
  console.log(boxTypes);
  //  console.log(max);

  // boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  // console.log(boxTypes);
  // let map = {};
  // for (let i = 0; i < boxTypes.length; i++) {
  //   if (map[boxTypes[i][0]])
  //     map[boxTypes[i][0]] = map[boxTypes[i][0]] + boxTypes[i][1];
  //   else map[boxTypes[i][0]] = boxTypes[i][1];
  // }

  // boxTypes = [];
  // for (const item of Object.entries(map)) {
  //   boxTypes.push([Number(item[0]), item[1]]);
  // }
  // console.log(boxTypes);

  // boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  // console.log(boxTypes);
  // console.log(truckSize);
  let count = 0;
  let i = 0;
  while (truckSize > 0) {
    if (i >= boxTypes.length - 1) break;
    if (boxTypes[i] && truckSize >= boxTypes[i][0]) {
      count += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else {
      count += truckSize * boxTypes[i][1];
      truckSize = 0;
    }
    i++;
  }

  return count;
};

console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9]
    ],
    10
  )
);

// console.log(
//   maximumUnits(
//     [
//       [4, 2],
//       [5, 5],
//       [4, 1],
//       [1, 4],
//       [2, 5],
//       [1, 3],
//       [5, 3],
//       [1, 5],
//       [5, 5],
//       [1, 1]
//     ],
//     24
//   )
// );

// console.log(
//   maximumUnits(
//     [
//       [1, 3],
//       [2, 2],
//       [3, 1]
//     ],
//     4
//   )
// );

// console.log(
//   maximumUnits(
//     [
//       [1, 3],
//       [5, 5],
//       [2, 5],
//       [4, 2],
//       [4, 1],
//       [3, 1],
//       [2, 2],
//       [1, 3],
//       [2, 5],
//       [3, 2]
//     ],
//     35
//   )
// );
