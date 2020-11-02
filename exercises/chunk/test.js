const Chunk = require('./index.js');

describe('Anagram', function () {
  'use strict';

  it('chunk using method 1', () => {
    expect(Chunk.One([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(Chunk.One([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(Chunk.One([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    expect(Chunk.One([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
    expect(Chunk.One([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
    expect(Chunk.One([1, 2, 3, 4, 5, '6', '7', { a: 1 }], 10)).toEqual([[1, 2, 3, 4, 5, '6', '7', { a: 1 }]]);
  });

  it('chunk using method 2', () => {
    expect(Chunk.Two([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(Chunk.Two([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(Chunk.Two([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    expect(Chunk.Two([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
    expect(Chunk.Two([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
    expect(Chunk.Two([1, 2, 3, 4, 5, '6', '7', { a: 1 }], 10)).toEqual([[1, 2, 3, 4, 5, '6', '7', { a: 1 }]]);
  });

  it('chunk using method 3', () => {
    expect(Chunk.Three([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(Chunk.Three([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(Chunk.Three([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    expect(Chunk.Three([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
    expect(Chunk.Three([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
    expect(Chunk.Three([1, 2, 3, 4, 5, '6', '7', { a: 1 }], 10)).toEqual([[1, 2, 3, 4, 5, '6', '7', { a: 1 }]]);
  });

  it('chunk using method 4', () => {
    expect(Chunk.Forth([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(Chunk.Forth([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(Chunk.Forth([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    expect(Chunk.Forth([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
    expect(Chunk.Forth([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
    expect(Chunk.Forth([1, 2, 3, 4, 5, '6', '7', { a: 1 }], 10)).toEqual([[1, 2, 3, 4, 5, '6', '7', { a: 1 }]]);
  });

  it('chunk using method 5', () => {
    expect(Chunk.Fifth([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(Chunk.Fifth([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(Chunk.Fifth([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
    expect(Chunk.Fifth([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]]);
    expect(Chunk.Fifth([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]]);
    expect(Chunk.Fifth([1, 2, 3, 4, 5, '6', '7', { a: 1 }], 10)).toEqual([[1, 2, 3, 4, 5, '6', '7', { a: 1 }]]);
  });
});

