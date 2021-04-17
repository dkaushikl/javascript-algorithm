const Exponential = require('./index.js');

describe('Exponential search', () => {
  it('findElement', () => {
    expect(Exponential.findElement([10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47], 21)).toEqual(7);
  });
});
