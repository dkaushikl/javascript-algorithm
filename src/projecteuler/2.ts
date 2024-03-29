('use strict');
function Fibonacci1(n) {
  var result = [];
  var result1 = 0;
  for (var i = 0; i <= n; i += 1) {
    var value = 0;
    if (result.length === 0) {
      value = 1;
    } else {
      value =
        (result[i - 1] ? result[i - 1] : 0) +
        (result[i - 2] ? result[i - 2] : 0);
    }

    if (value >= 4000000) {
      break;
    }
    result.push(value);

    if (value % 2 === 0) {
      result1 = result1 + value;
    }
  }

  console.log(result1);
}

Fibonacci1(Number.MAX_SAFE_INTEGER);

function Fibonacci2(n) {
  var result = [];
  var result1 = [];

  var val1 = 1;
  var val2 = 0;
  while (result.length < n) {
    var sum = val1 + val2;
    result.push(sum);

    val2 = val1;
    val1 = sum;

    if (sum % 2 === 0) {
      result1.push(sum);
    }
  }

  console.log(result1);
}

Fibonacci2(Number.MAX_SAFE_INTEGER);
