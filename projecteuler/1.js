'use strict';
function Multiple(n) {
  var sum = 0;
  for (var i = 1; i < n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }

  return sum;
}

Multiple(1000);
