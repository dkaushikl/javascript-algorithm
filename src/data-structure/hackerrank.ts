// https://www.hackerrank.com/challenges/angry-professor/problem
function angryProfessor(k, a) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) count++;
  }

  return count >= k ? 'NO' : 'YES';
}

// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies
function beautifulDays(i, j, k) {
  let result = 0;

  for (let index = i; i <= j; i += 1) {
    let reverseNumber = Number(
      Number(i)
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
    let diff = i - reverseNumber;
    let modulo = diff % k;

    if (modulo === 0) result++;
  }

  return result;
}

// https://www.hackerrank.com/challenges/two-strings
function twoStrings(s1, s2) {
  let map1 = {};
  for (let i = 0; i < s1.length; i++) map1[s1[i]] = map1[s1[i]] ? map1[s1[i]] + 1 : 1;

  let map2 = {};
  for (let i = 0; i < s2.length; i++) map2[s2[i]] = map2[s2[i]] ? map2[s2[i]] + 1 : 1;

  for (let keys in map1) {
    if (map2[keys]) return 'YES';
  }

  return 'NO';
}

function climbingLeaderBoard(scores, alice) {
  let n = scores.length;
  let m = alice.length;

  let result,
    rank = [];
  rank[0] = 1;

  for (let i = 1; i < n; i++) rank[i] = scores[i] === scores[i - 1] ? rank[i - 1] : rank[i - 1] + 1;

  console.log(`rank`, rank);
}

climbingLeaderBoard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]);

// https://www.hackerrank.com/challenges/lilys-homework
// remaining
// function lilysHomework(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let smallIndex = i;
//         let isAnyChanges = false;

//         for (let j = i + 1; j < arr.length; j++)
//             if (arr[smallIndex] > arr[j]) {
//                 smallIndex = j;
//                 isAnyChanges = true;
//             }

//         if (isAnyChanges) {
//             [arr[smallIndex], arr[i]] = [arr[i], arr[smallIndex]];
//             count++;
//         }
//     }

//     console.log(count);
// }

// console.log(lilysHomework([3, 4, 2, 5, 1]));

// console.log(twoStrings('hello', 'world'));
// console.log(twoStrings('hi', 'world'));

// beautifulDays(20, 23, 6);

// angryProfessor(3, [-1, -3, 4, 2]);
// angryProfessor(2, [0, -1, 2, 1]);
