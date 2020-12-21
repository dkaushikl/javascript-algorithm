const JumpSearch = require('./index.js');

describe('Jump search', function() {
  'use strict';

  it('Find Element', () => {
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 0)).toEqual(0);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 1)).toEqual(1);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 1)).toEqual(1);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 2)).toEqual(3);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 3)).toEqual(4);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 4)).toEqual(-1);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 5)).toEqual(5);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 8)).toEqual(6);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 13)).toEqual(7);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 21)).toEqual(8);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 34)).toEqual(9);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 55)).toEqual(10);
    expect(JumpSearch.findElement([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 89)).toEqual(11);
  });
});
