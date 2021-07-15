// Problem 2
//
// This problem was asked by Uber.
//
// Given an array of integers, return a new array such that each element at index i of the
// new array is the product of all the numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].
//
// Follow-up: what if you can't use division?
//
// https://leetcode.com/problems/product-of-array-except-self/
//
// O(N) Time Complexity
// O(N) Space Complexity, O(1) if not including output array
// N is the number of elements in the array
//
// With division, multiply every number to have a final product and then for each number divide from the final product

function solution1(arr) {
  const multiplication = arr.reduce((a, b) => a * b, 1);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(multiplication / arr[i]);
  }

  return result;
}

function solution2(arr) {
  if (arr.length === 0) return [];

  let productArr = [1];
  for (let i = 1; i < arr.length; i++) {
    productArr[i] = productArr[i - 1] * arr[i - 1];
  }

  let product = 1;
  for (let i = productArr.length - 1; i >= 0; i--) {
    productArr[i] = productArr[i] * product;
    product = arr[i] * product;
  }

  return productArr;
}

console.log(solution2([5, 8, 10]));
console.log(solution2([3, 2, 1]));
