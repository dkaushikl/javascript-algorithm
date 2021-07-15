// Problem 5
//
// This problem was asked by Jane Street.
//
// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
//
// Given this implementation of cons:
//
// function cons(a, b) {
//   function pair(cb) {
//     return cb(a, b);
//   }
//   return pair;
// }
//
// Implement car and cdr.

const { updateYield } = require("typescript");

function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}

function car(fn) {
  function callThisFunction(x, y) {
    return x;
  }

  return fn(callThisFunction);
}

function cdr(fn) {
    function callThisFunction(x, y) {
      return y;
    }
  
    return fn(callThisFunction);
  }

console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));

