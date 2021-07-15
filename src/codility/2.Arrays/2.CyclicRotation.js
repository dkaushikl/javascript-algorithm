function solution(a = [3, 8, 9, 7, 6], k = 3) {
  if (a.length <= 0) return [];
  if (a.length <= 1) return a;

  return [...a.slice(a.length - k, a.length), ...a.slice(0, a.length - k)];
}

// function solution(A, K) {
//   K = K % A.length;

//   if (K === 0) {
//     return A;
//   }

//   return A.splice(A.length - K, A.length).concat(A);
// }

console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4));
console.log(solution([], 3));
console.log(solution([1], 3));
console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([3, 8, 9, 7, 6, 5, 4, 6], 1));
