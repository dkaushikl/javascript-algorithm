/* 

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example : 
Given n = 5, and version = 4 is the first bad version.
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
*/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

var solution = function(isBadVersion) {
  return function(n) {
    let badVersion = 1;
    let startIndex = 1;
    let endIndex = n;

    while (startIndex <= endIndex) {
      console.log(`startIndex and endIndex ->>>>>>>>>>, ${startIndex}  , ${endIndex}`);
      let midIndex = Math.floor((startIndex + endIndex) / 2);
      if (isBadVersion(midIndex)) {
        if (!isBadVersion(midIndex - 1)) {
          badVersion = midIndex;
        } else {
          endIndex = midIndex - 1;
        }
      } else {
        startIndex = midIndex + 1;
      }
    }

    return badVersion;
  };
};

// 5

// 4 -> 3 -> 4

// 1000

// 868
// startIndex and endIndex ->>>>>>>>>>, 1  , 1000
// startIndex and endIndex ->>>>>>>>>>, 501  , 1000
// startIndex and endIndex ->>>>>>>>>>, 751  , 1000
// startIndex and endIndex ->>>>>>>>>>, 751  , 874
// startIndex and endIndex ->>>>>>>>>>, 813  , 874
// startIndex and endIndex ->>>>>>>>>>, 844  , 874
// startIndex and endIndex ->>>>>>>>>>, 860  , 874
// startIndex and endIndex ->>>>>>>>>>, 868  , 874
// startIndex and endIndex ->>>>>>>>>>, 868  , 870
// startIndex and endIndex ->>>>>>>>>>, 868  , 868

// 124
// startIndex and endIndex ->>>>>>>>>>, 1  , 1000
// startIndex and endIndex ->>>>>>>>>>, 1  , 499
// startIndex and endIndex ->>>>>>>>>>, 1  , 249
// startIndex and endIndex ->>>>>>>>>>, 1  , 124
// startIndex and endIndex ->>>>>>>>>>, 63  , 124
// startIndex and endIndex ->>>>>>>>>>, 94  , 124
// startIndex and endIndex ->>>>>>>>>>, 110  , 124
// startIndex and endIndex ->>>>>>>>>>, 118  , 124
// startIndex and endIndex ->>>>>>>>>>, 122  , 124
// startIndex and endIndex ->>>>>>>>>>, 124  , 124
