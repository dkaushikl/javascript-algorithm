const BinarySearch = require('./index.js');

describe('Binary search', () => {
  it('implementation through while', () => {
    expect(BinarySearch.whileLoop([21, 22, 23, 24, 25, 26], 21)).toEqual(-1);
    expect(BinarySearch.whileLoop([21, 22, 23, 24, 25, 26], 22)).toEqual(1);
    expect(BinarySearch.whileLoop([21, 22, 23, 24, 25, 26], 23)).toEqual(2);
    expect(BinarySearch.whileLoop([21, 22, 23, 24, 25, 26], 24)).toEqual(3);
    expect(BinarySearch.whileLoop([21, 22, 23, 24, 25, 26], 25)).toEqual(4);
    expect(BinarySearch.whileLoop([21, 22, 23, 24, 25, 26], 26)).toEqual(-1);
  });

  it('implementation through recursive', () => {
    expect(BinarySearch.recursive([21, 22, 23, 24, 25, 26], 21)).toEqual(0);
    expect(BinarySearch.recursive([21, 22, 23, 24, 25, 26], 22)).toEqual(1);
    expect(BinarySearch.recursive([21, 22, 23, 24, 25, 26], 23)).toEqual(2);
    expect(BinarySearch.recursive([21, 22, 23, 24, 25, 26], 24)).toEqual(3);
    expect(BinarySearch.recursive([21, 22, 23, 24, 25, 26], 25)).toEqual(4);
    expect(BinarySearch.recursive([21, 22, 23, 24, 25, 26], 26)).toEqual(5);
  });

  it('two sum', () => {
    expect(BinarySearch.twoSum([2, 7, 12, 14], 17)).toEqual([2, 3]);
  });

  it('square root', () => {
    expect(BinarySearch.mySqrt2(168)).toEqual(12);
  });

  it('square root', () => {
    expect(BinarySearch.searchRange([1, 1], 1)).toEqual([0, 1]);
  });

  it('devide', () => {
    expect(BinarySearch.divide(7, -3)).toEqual(-2);
  });

  it('power', () => {
    expect(BinarySearch.myPow(2, 10)).toEqual(1024);
    expect(BinarySearch.myPow(2, -2)).toEqual(0.25);
  });

  it('find peak element through binary method', () => {
    expect(BinarySearch.findPeakElement([1, 2, 3, 4, 5, 6, 7])).toEqual(7);
    expect(BinarySearch.findPeakElement([1, 2, 3, 4, 5])).toEqual(5);
    expect(BinarySearch.findPeakElement([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1])).toEqual(6);
  });

  it('count square through binary method', () => {
    expect(BinarySearch.countSquareWhile(4)).toEqual(1);
    expect(BinarySearch.countSquareWhile(5)).toEqual(3);
    expect(BinarySearch.countSquareWhile(6)).toEqual(3);
    expect(BinarySearch.countSquareWhile(7)).toEqual(3);
    expect(BinarySearch.countSquareWhile(8)).toEqual(3);
    expect(BinarySearch.countSquareWhile(9)).toEqual(2);
    expect(BinarySearch.countSquareWhile(10)).toEqual(4);
    expect(BinarySearch.countSquareWhile(11)).toEqual(4);
    expect(BinarySearch.countSquareWhile(12)).toEqual(4);
    expect(BinarySearch.countSquareWhile(13)).toEqual(4);
    expect(BinarySearch.countSquareWhile(14)).toEqual(4);
    expect(BinarySearch.countSquareWhile(15)).toEqual(4);
    expect(BinarySearch.countSquareWhile(16)).toEqual(3);
  });

  it('count square through recursive method', () => {
    expect(BinarySearch.countSquareRecursive(4)).toEqual(1);
    expect(BinarySearch.countSquareRecursive(5)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(6)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(7)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(8)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(9)).toEqual(2);
    expect(BinarySearch.countSquareRecursive(10)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(11)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(12)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(13)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(14)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(15)).toEqual(-1);
    expect(BinarySearch.countSquareRecursive(16)).toEqual(3);
  });

  it('search matrix through binary method', () => {
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        1,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        2,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        3,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        4,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        5,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        10,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        11,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        14,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        17,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        20,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        21,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        22,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        23,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        24,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        31,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        37,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixBinary(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        53,
      ),
    ).toEqual(undefined);
  });

  it('search matrix through recursive method', () => {
    expect(
      BinarySearch.searchMatrixRecursive(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        1,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixRecursive(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        2,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixRecursive(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        3,
      ),
    ).toEqual(true);
    expect(
      BinarySearch.searchMatrixRecursive(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        4,
      ),
    ).toEqual(false);
    expect(
      BinarySearch.searchMatrixRecursive(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        5,
      ),
    ).toEqual(true);
  });
});
