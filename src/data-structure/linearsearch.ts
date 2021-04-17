function findElement(arr, target) {
  if (arr.length <= 0) return -1;

  let result = -1;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === target) {
      result = index;
      break;
    }
  }
  console.log(result);
}

function weightedUniformStrings(s, queries) {
  let a = 'abcdefghijklmnopqrstuvwxyz';
  let alphabets = {};

  for (let i = 0; i < a.length; i++) {
    alphabets[a[i]] = i + 1;
  }

  const allSum = {};
  let previous = '';

  for (let i = 0; i < s.length; i++) {
    if ((previous != null && previous[0] !== s[i]) || previous === '') {
      previous = previous === '' ? previous + s[i] : s[i];
      allSum[alphabets[s[i]]] = 1;
      continue;
    }

    if (previous != null && previous[0] === s[i]) {
      previous += s[i];
      allSum[alphabets[s[i]] * previous.length] = 1;
      continue;
    }
  }

  const result = [];

  for (let i = 0; i < queries.length; i++) {
    result.push(allSum[queries[i]] ? 'YES' : 'NO');
  }

  return result;
}

function permutationSolve(x) {
  let allPermutations = [];

  for (let i = 1; i <= x; i++) {
    let permutation = [...i];
    allPermutations.push(permutation);
  }

  console.log(allPermutations);
}

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let map = {};
  for (var char of arr1) map[char] = map[char] ? map[char] + 1 : 1;

  let output = true;
  for (let i = 0; i < arr2.length; i++) {
    let squareRoot = Math.sqrt(arr2[i]);

    if (map[squareRoot]) map[squareRoot] -= 1;
    else {
      output = false;
      break;
    }
  }

  return output;
}

function validAnagram(str1, str2) {
  if (!str1 || !str2) return true;

  if (str1.length !== str2.length) return false;

  let output = true;
  for (let i = str2.length; i > 0; i--) {
    if (str2[i] !== str1[str1.length - i]) {
      output = false;
      break;
    }
  }

  return output;
}

function validAnagram2() {
  // check both string length are same
  // check both string is not null and undefined
  // make hashmap for first string with countable
  // now for loop on second string and check whether char is available on map
  // if all okay then  true otherwise false;
}

function sumZero(arr) {
  // check array is not empty
  // array must have both positive and negative value
  // make hashmap for both the positive and negative value
  // then for loop over positive value and check zero
  // and return pair

  if (arr.length <= 0) return [];

  let positive = {};
  let negative = {};

  for (let char of arr) {
    if (char < 0) negative[char] = negative[char] ? negative[char] + 1 : 1;

    if (char > 0) positive[char] = positive[char] ? positive[char] + 1 : 1;
  }

  let lastMaximumPairChar = 0;
  let pair = [];

  for (let char in positive) {
    if (negative[-char]) {
      if (Number(char) + Number(-char) === 0) {
        if (char > lastMaximumPairChar) pair = [Number(char), Number(-char)];
      }
    }
  }

  return pair;
}

function countUniqueValues(arr) {
  // create a map over array
  // and return map key count;

  let map = {};
  for (let char of arr) map[char] = map[char] ? map[char] + 1 : 1;

  return Object.keys(map).length;
}

function maxSubArraySum(arr, num) {
  // first sum of given number and store in temp variable as well as in output variable
  // now start another for loop but this time i should be start with given number
  // and make sure that loop complete at last number plus
  // now in lnside loop check whether temp array varible minus last inserted value and add new latest value
  // then check which value is maximum and return it

  let temp = 0;
  let max = 0;

  for (let i = 0; i < number; i++) temp += arr[i];

  max = temp;

  for (let i = number; i < arr.length - number + 1; i++) {
    temp = temp - arr[i - number] + arr[i];
    max = Math.max(temp, max);
  }

  return max;
}

countUniqueValues([1, 1, 1, 2, 3]);

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('nayan', 'nayan'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qey'));

validAnagram('anagram', 'nagrhfd');

permutationSolve([0, 2, 3, 0]);

weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]);

findElement([10, 20, 30, 40, 50, 60], 20);
