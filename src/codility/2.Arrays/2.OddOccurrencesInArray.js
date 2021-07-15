function solution(a) {
  if (a.length <= 0) return -1;

  const map = {};

  for (const item of a) {
    if (map[item]) delete map[item];
    else map[item] = 1;
  }

  return Object.keys(map)[0];
}

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let value = A[0];
//     for (let i=1; i<A.length; i++) {
//         value ^= A[i];
//         console.log(value);
//     }
//     return value;
// }

// tslint:disable-next-line:no-console
console.log(solution([9, 3, 9, 3, 9, 7, 9]));
