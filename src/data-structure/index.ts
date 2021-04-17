let firstArray = [];
let lastArray = [];

let resultArray = [];

function sherlockAndAnagrams(s) {
  ForFirstArray(s);
  ForSecondArray(
    s
      .split('')
      .reverse()
      .join(''),
  );

  console.log(firstArray);
  console.log(lastArray);

  let result = findUniqueArray(firstArray, lastArray, s.length);
  console.log(resultArray.length);
  return resultArray.length;
}

function ForFirstArray(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (i === j && !firstArray.includes(s[j])) firstArray.push(s[j]);

      if (!firstArray.includes(s.substr(i, j + 1)) && s.length - 1 !== j) {
        if (!isReverseStringSame(s.substr(i, j + 1)))
          if (
            !firstArray.includes(
              s
                .substr(i, j + 1)
                .split('')
                .reverse()
                .join(''),
            )
          )
            firstArray.push(s.substr(i, j + 1));
      }
    }
  }
}

function ForSecondArray(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (i === j && !lastArray.includes(s[j])) lastArray.push(s[j]);

      if (!lastArray.includes(s.substr(i, j + 1)) && s.length - 1 !== j) {
        if (!isReverseStringSame(s.substr(i, j + 1)))
          if (
            !lastArray.includes(
              s
                .substr(i, j + 1)
                .split('')
                .reverse()
                .join(''),
            )
          )
            lastArray.push(s.substr(i, j + 1));
      }
    }
  }
}

function findUniqueArray(a1, a2, n) {
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j] && a1[i].length !== n) {
        resultArray.push({ key: a1[i], value: a2[j] });
      }
    }
  }
}

function main() {
  let arr = [
    [1, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [0, 0, 2, 4, 4, 0, 1],
    [0, 0, 0, 2, 0, 0, 1],
    [0, 0, 1, 2, 4, 0, 2],
    [0, 0, 1, 2, 4, 0, 2],
    [0, 0, 1, 2, 4, 0, 2],
  ];

  let totalHourGlass = [];

  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = 0; j <= 4; j++) {
      let takeValueForFirst = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      let takeValueForMiddle = arr[i + 1][j + 1];
      let takeValueForLast = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      totalHourGlass.push(takeValueForFirst + takeValueForMiddle + takeValueForLast);
    }

    console.log(totalHourGlass);
  }

  console.log(Math.max(...totalHourGlass));
}

main();

function isReverseStringSame(s) {
  return (
    s ===
    s
      .split('')
      .reverse()
      .join('')
  );
}

class Calculator {
  power(n, p) {
    if (Math.sign(n) === -1 || Math.sign(p) === -1) throw new Error('n and p should be non-negative');

    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= p;
    }

    return result;
  }
}

function main() {
  stacks = [];
  queues = [];

  function pushCharacter(ch) {
    stacks.push(ch);
  }

  function enqueueCharacter(ch) {
    queues.push(ch);
  }

  function popCharacter() {
    if (stacks.length > 0) {
      let popCharacter = stacks[stacks.length - 1];
      stacks.pop();
      return popCharacter;
    }

    return '';
  }

  function dequeueCharacter(ch) {
    if (queues.length > 0) {
      let dequeueCharacter = queues[0];
      queues.shift();
      return dequeueCharacter;
    }

    return '';
  }
}

function processData(input) {
  const [number, arr2, weight2] = input.split('\n');
  const arr = arr2.replace(/ /g, '-').split('-');
  const weight = weight2.replace(/ /g, '-').split('-');

  const totalArrCrossWeight = 1;
  const totalWeight = 0;

  for (let i = 0; i < number; i++) {
    let multiply = parseInt(arr[0]) * parseInt(weight[0]);
    if (multiply > 0) totalArrCrossWeight += parseInt(multiply);

    totalWeight += weight[i];
  }

  console.log((totalArrCrossWeight / totalWeight).toFixed(1));
}

function processData(input) {
  const [number, arr2] = input.split('\n');
  const arr = arr2
    .replace(/ /g, '-')
    .split('-')
    .sort((a, b) => a - b);
  const arrLength = arr.length;
  const middle = arrLength / 2;
  let map = {};
  let sum = 0;

  for (let i = 0; i < arrLength; i++) {
    sum += parseInt(arr[i]);
    if (!map[arr[i]]) map[arr[i]] = 1;
    else map[arr[i]]++;
  }

  let mode = null;
  let count = 0;

  Object.keys(map).forEach(x => {
    if (map[x] > count || mode === null) {
      mode = x;
      count = map[x];
    }
  });

  const mean = parseInt(sum) / parseInt(arrLength);
  const median = (parseInt(arr[middle - 1]) + parseInt(arr[middle])) / 2;

  console.log(mean);
  console.log(median);
  console.log(mode);
}

function processData(input) {
  const [number, arr2] = input.split('\n');
  let arr = arr2
    .replace(/ /g, '-')
    .split('-')
    .sort((a, b) => a - b);

  const isMiddleDivided = arr.length % 2;
  const middle = isMiddleDivided !== 0 ? Math.floor(arr.length / 2) : arr.length / 2;

  const firstArr = [];
  const thirdArr = [];

  for (let i = 0; i < number; i++) {
    if (isMiddleDivided !== 0) {
      if (i <= middle) firstArr.push(arr[i]);

      if (i >= middle + 1) thirdArr.push(arr[i]);
    }

    if (isMiddleDivided === 0) {
      if (i < middle) firstArr.push(arr[i]);

      if (i > middle) thirdArr.push(arr[i]);
    }
  }

  const firstMiddle = firstArr.length / 2;
  const firstResult =
    firstArr.length % 2 !== 0
      ? firstArr[Math.floor(firstMiddle)]
      : (parseInt(firstArr[Math.floor(firstMiddle) - 1]) + parseInt(firstArr[Math.floor(firstMiddle)])) / 2;

  const secondResult = isMiddleDivided !== 0 ? arr[middle] : (parseInt(arr[middle - 1]) + parseInt(arr[middle])) / 2;

  const thirdMiddle = thirdArr.length / 2;
  const thirdResult =
    thirdArr.length % 2 !== 0
      ? thirdArr[Math.floor(thirdMiddle)]
      : (parseInt(thirdArr[Math.floor(thirdMiddle) - 1]) + parseInt(thirdArr[Math.floor(thirdMiddle)])) / 2;

  console.log(firstResult);
  console.log(secondResult);
  console.log(thirdResult);
}

function processData(input) {
  const [arrLength, input1, input2] = input.split('\n');
  const elementArr = input1
    .replace(/ /g, '-')
    .split('-')
    .map(x => parseInt(x));
  const frequencyArr = input2
    .replace(/ /g, '-')
    .split('-')
    .map(x => parseInt(x));
  let finalArray = [];

  for (let i = 0; i < arrLength; i++) {
    let test = new Array(frequencyArr[i]).fill(elementArr[i]);
    finalArray.push(...test);
  }

  finalArray = finalArray.sort((a, b) => a - b);

  const isDevide = finalArray.length % 2 === 0;
  const median = isDevide ? finalArray.length / 2 : Math.floor(finalArray.length / 2);

  let lowerPart = [];
  let higherPart = [];

  if (isDevide) {
    lowerPart = finalArray.slice(0, median);
    higherPart = finalArray.slice(median, median.length);
  } else {
    lowerPart = finalArray.slice(0, median);
    higherPart = finalArray.slice(median + 1, median.length);
  }

  const firstMedian = lowerPart.length / 2;
  const firstAns =
    lowerPart.length % 2 === 0 ? (lowerPart[firstMedian - 1] + lowerPart[firstMedian]) / 2 : lowerPart[firstMedian];

  const secondMedian = higherPart.length / 2;
  const secondAns =
    higherPart.length % 2 === 0
      ? (higherPart[secondMedian - 1] + higherPart[secondMedian]) / 2
      : higherPart[secondMedian];

  console.log((secondAns - firstAns).toFixed(1));
}

function processData(input) {
  const [arrLength, input1] = input.split('\n');
  const arr = input1
    .replace(/ /g, '-')
    .split('-')
    .sort((a, b) => a - b);

  const isDevide = arr.length % 2 === 0;
  const median = arr.length / 2;
  const mean = isDevide ? (arr[median - 1] + arr[median]) / 2 : arr[Math.floor(median)];

  let finalVal = 0;

  for (let i = 0; i < arr.length; i++) {
    let pow = Math.pow(Math.abs(arr[i] - mean), 2);
    finalVal += pow;
  }

  console.log(Math.sqrt(finalVal / arrLength).toFixed(1));
}

function processData(input) {
  const [arrLength, input1] = input.split('\n');
  const arr = input1
    .replace(/ /g, '-')
    .split('-')
    .sort((a, b) => a - b);

  const median = arr.length / 2;

  const mean = arr.length % 2 === 0 ? (Number(arr[median - 1]) + Number(arr[median])) / 2 : arr[Math.floor(median)];

  let finalVal = 0;

  for (let i = 0; i < arr.length; i++) {
    let pow = Math.pow(parseFloat(arr[i]) - mean, 2);
    finalVal += pow;
  }

  console.log(Math.sqrt(finalVal / arrLength).toFixed(1));
}

function getSecondLargest(nums) {
  nums = nums.sort(((a, b) = b - a));

  let secondLargest = -1;
  let firstLargest = -1;

  for (let i = 0; i < nums.length; i++) {
    if (firstLargest === -1) {
      firstLargest = nums[i];
    }

    if (firstLargest !== nums[i] && secondLargest < firstLargest) {
      secondLargest = firstLargest;
    }
  }

  return secondLargest;
}

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;

  const firstDecimal = 4.0;

  const firstString = 'HackerRank ';

  console.log(secondInteger + firstInteger);

  console.log((firstDecimal + secondDecimal).toFixed(2));

  console.log(`${firstString} ${secondString}`);

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
}

function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let firstString = '';
  let secondString = '';

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) firstString += s[i];
    else secondString += s[i];
  }

  for (let i = 0; i < firstString.length; i++) {
    console.log(firstString[i]);
  }

  for (let i = 0; i < secondString.length; i++) {
    console.log(secondString[i]);
  }
}
