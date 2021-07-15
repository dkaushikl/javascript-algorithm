// Problem 1
//
// This problem was recently asked by Google.
//
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//
// Bonus: Can you do this in one pass?
//
// https://leetcode.com/problems/two-sum/
// https://www.youtube.com/watch?v=XKu_SEDAykw
//
// O(N) Time complexity
// O(N) Space complexity
// N is the number of elements in the array

function solution(a = [10, 15, 3, 7], k = 17) {
  const map = new Map();

  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i]))
        return [map.get(a[i]), i];

    map.set(k - a[i], i)
  }

  return [];
}

console.log(solution());
console.log(solution([10, 15, 3, 7], 26));
console.log(solution([], 1));
console.log(solution([50, 0], 50));
console.log(solution([-50, 100], 50));