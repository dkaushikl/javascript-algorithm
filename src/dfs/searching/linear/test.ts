const LinearSearch = require('./index.js');

describe('Linear search', () => {
  it('Find Element', () => {
    expect(LinearSearch.findElement([10, 20, 30, 40, 50, 60], 20)).toEqual(1);
    expect(LinearSearch.findElement([10, 20, 30, 40, 50, 60], 10)).toEqual(0);
    expect(LinearSearch.findElement([10, 20, 30, 40, 50, 60], 35)).toEqual(-1);
    expect(
      LinearSearch.findElement([-1, 1, 10, 20, 30, 40, 50, 60], -1)
    ).toEqual(0);
    expect(LinearSearch.findElement([1, -1, 30, 40, 50, 60], 20)).toEqual(-1);
  });
});
