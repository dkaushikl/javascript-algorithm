const squareStarPattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 0; i < n; i++) {
    // external loop
    for (let j = 0; j < n; j++) {
      // internal loop
      string += '*';
    }
    // newline after each row
    string += '\n';
  }
  // printing the string
  console.log(string);
  return;
};

// console.log(squareStarPattern());

const hollowSquarePattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 0; i < n; i++) {
    // external loop
    for (let j = 0; j < n; j++) {
      // internal loop
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        string += '*';
      } else {
        string += ' ';
      }
    }
    // newline after each row
    string += '\n';
  }
  // printing the string
  console.log(string);
  return;
};

// console.log(hollowSquarePattern());

const leftTrianglePattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 0; i < n; i++) {
    // external loop
    for (let j = 0; j < n; j++) {
      // internal loop
      if (i <= j) {
        string += '*';
      } else {
        string += ' ';
      }
    }
    // newline after each row
    string += '\n';
  }
  // printing the string
  console.log(string);
  return string;
};

// console.log(leftTrianglePattern());

const rightTrianglePattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 0; i < n; i++) {
    // external loop
    for (let j = 0; j < n; j++) {
      // internal loop
      if (j >= n - i - 1) {
        string += '*';
      } else {
        string += ' ';
      }
    }
    // newline after each row
    string += '\n';
  }
  // printing the string
  console.log(string);
  return string;
};

// console.log(rightTrianglePattern());

const downwardTrianglePattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 0; i < n; i++) {
    // external loop
    for (let j = 0; j < n; j++) {
      // internal loop
      if (j <= n - i - 1) {
        string += '*';
      } else {
        string += ' ';
      }
    }
    // newline after each row
    string += '\n';
  }
  // printing the string
  console.log(string);
  return string;
};

// console.log(downwardTrianglePattern());

const hollowTriangleStarPattern = () => {
  let n = 6; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 0; i < n; i++) {
    // external loop
    for (let j = 0; j < n; j++) {
      // internal loop
      if (j === 0 || i === n - 1 || i === j) {
        string += '*';
      } else {
        string += ' ';
      }
    }
    // newline after each row
    string += '\n';
  }
  // printing the string
  console.log(string);
  return string;
};

// console.log(hollowTriangleStarPattern());

const pyramidPattern = () => {
  let n = 10; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      string += ' ';
    }

    for (let j = 1; j <= i * 2 - 1; j++) {
      string += '*';
    }
    string += '\n';
  }
  // printing the string
  return string;
};

console.log(pyramidPattern());

const reversedPyramidPattern = () => {
  let n = 3; // row or column count
  // defining an empty string
  let string = '';

  for (let i = n; i >= 0; i--) {
    for (let j = 0; j < n - i; j++) string += ' ';

    for (let j = i * 2 - 1; j >= 1; j--) string += '*';

    string += '\n';
  }
  // printing the string
  return string;
};

console.log(reversedPyramidPattern());

const hollowPyramidStarPattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) string += ' ';

    for (let j = 0; j < i * 2 - 1; j++) {
      if (j === 0 || j === i * 2 - 2 || i === n) string += '*';
      else string += ' ';
    }

    string += '\n';
  }
  // printing the string
  return string;
};

console.log(hollowPyramidStarPattern());

const diamondPattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) string += ' ';

    for (let j = 1; j <= i * 2 - 1; j++) string += '*';

    string += '\n';
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n - i; j++) string += ' ';

    for (let j = 1; j <= i * 2 - 1; j++) string += '*';

    string += '\n';
  }
  // printing the string
  return string;
};

console.log(diamondPattern());

const hollowDiamondPattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) string += ' ';

    for (let j = 0; j < i * 2 - 1; j++) {
      if (j === 0 || j === i * 2 - 2 || i === n) string += '*';
      else string += ' ';
    }

    string += '\n';
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n - i; j++) string += ' ';

    for (let j = 0; j < i * 2 - 1; j++) {
      if (j === 0 || j === i * 2 - 2 || i === n) string += '*';
      else string += ' ';
    }

    string += '\n';
  }
  // printing the string
  return string;
};

console.log(hollowDiamondPattern());

const hourGlassStarPattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = n; i > 0; i--) {
    for (let j = 0; j < n - i; j++) string += ' ';

    for (let j = 1; j <= i * 2 - 1; j++) string += '*';

    string += '\n';
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < n - i; j++) string += ' ';

    for (let j = 1; j <= i * 2 - 1; j++) string += '*';

    string += '\n';
  }
  // printing the string
  return string;
};

console.log(hourGlassStarPattern());

const rightPascalStarPattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) string += '*';
    string += '\n';
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let j = i; j >= 1; j--) string += '*';
    string += '\n';
  }

  // printing the string
  return string;
};

console.log(rightPascalStarPattern());

const leftPascalStarPattern = () => {
  let n = 5; // row or column count
  // defining an empty string
  let string = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) string += j > n - i ? '*' : ' ';

    string += '\n';
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n; j++) string += j > n - i ? '*' : ' ';

    string += '\n';
  }

  // printing the string
  return string;
};

console.log(leftPascalStarPattern());
