const firstBadVersion = (n: number) => {
  let badVersion = 1;
  let startIndex = 1;
  let endIndex = n;

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    console.log(midIndex);
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

function isBadVersion(median: number, isBad: number = 4) {
  if (median >= isBad) return true;
  else return false;
}

console.log(firstBadVersion(5));
