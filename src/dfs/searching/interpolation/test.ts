const InterPolationSearch = require('./index.js');

describe('InterPolation search', () => {
  it('Find Element', () => {
    expect(InterPolationSearch.findElement([10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47], 21)).toEqual(
      7,
    );
  });
});
