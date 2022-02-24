// 29. Divide Two Integers
// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// Return the quotient after dividing dividend by divisor.
// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.

var divide = function(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  let negatives = 0;
  if (dividend < 0) {
    dividend = -dividend;
    negatives++;
  }

  if (divisor < 0) {
    divisor = -divisor;
    negatives++;
  }

  let res = 0;
  while (dividend >= divisor) {
    let times = 1;
    let sum = divisor;
    while (sum + sum < dividend) {
      sum += sum;
      times += times;
      console.log(sum);
    }
    console.log(sum);
    console.log(times);
    res += times;
    dividend -= sum;
  }
  if (negatives === 1) res = -res;
  return res;
};

// Four test cases to run function on
console.log(divide(21, 3)); // 7
// console.log(divide(10, 3)) // 3
// console.log(divide(7, -3)) // -2
// console.log(divide(0, 1)) // 0
// console.log(divide(1, 1)) // 1

const divide1 = (dividend, divisor) => {
  const MIN_INT = -Math.pow(2, 31);
  const MAX_INT = Math.pow(2, 31) - 1;
  const sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let result = Math.floor(Math.exp(Math.log(dividend) - Math.log(divisor)));
  result *= sign;
  result = Math.min(result, MAX_INT);
  result = Math.max(result, MIN_INT);
  return result;
};
