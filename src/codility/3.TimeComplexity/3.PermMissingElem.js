// function solution(a) {
//   if (a.length <= 0) return 0;

//   let i = 0;
//   const totalSum = new Array(a[a.length - 1]).fill(0).map(x => {
//       i++;
//       x = i;
//       return x;
//     }).reduce((x, y) => x + y, 0);

//   const arrSum = a.reduce((x, y) => x + y, 0);
//   return totalSum - arrSum;
// }

function solution(a) {
    let total = ((a.length + 1) * (a.length + 2)) / 2;
    a.forEach(e => total -= e);
    return total;
}

console.log(solution([2, 3, 1, 5]));
