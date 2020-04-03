const { chunkOne, chunkTwo, chunkThree, chunkForth, chunkFifth } = require('./index.js');

test('chunk using method 1', () => {
    expect(chunkOne([1,2,3,4], 2)).toEqual([[1,2], [3,4]]);
    expect(chunkOne([1,2,3,4,5], 2)).toEqual([[1,2], [3,4], [5]]);
    expect(chunkOne([1,2,3,4,5, 6, 7, 8], 3)).toEqual([[1,2,3], [4,5,6], [7,8]]);
    expect(chunkOne([1,2,3,4,5], 4)).toEqual([[1,2,3,4], [5]]);
    expect(chunkOne([1,2,3,4,5], 10)).toEqual([[1,2,3,4,5]]);
    expect(chunkOne([1,2,3,4,5,"6","7",{a:1}], 10)).toEqual([[1,2,3,4,5,"6","7",{a:1}]]);
});

test('chunk using method 2', () => {
    expect(chunkTwo([1,2,3,4], 2)).toEqual([[1,2], [3,4]]);
    expect(chunkTwo([1,2,3,4,5], 2)).toEqual([[1,2], [3,4], [5]]);
    expect(chunkTwo([1,2,3,4,5, 6, 7, 8], 3)).toEqual([[1,2,3], [4,5,6], [7,8]]);
    expect(chunkTwo([1,2,3,4,5], 4)).toEqual([[1,2,3,4], [5]]);
    expect(chunkTwo([1,2,3,4,5], 10)).toEqual([[1,2,3,4,5]]);
    expect(chunkTwo([1,2,3,4,5,"6","7",{a:1}], 10)).toEqual([[1,2,3,4,5,"6","7",{a:1}]]);
});

test('chunk using method 3', () => {
    expect(chunkThree([1,2,3,4], 2)).toEqual([[1,2], [3,4]]);
    expect(chunkThree([1,2,3,4,5], 2)).toEqual([[1,2], [3,4], [5]]);
    expect(chunkThree([1,2,3,4,5, 6, 7, 8], 3)).toEqual([[1,2,3], [4,5,6], [7,8]]);
    expect(chunkThree([1,2,3,4,5], 4)).toEqual([[1,2,3,4], [5]]);
    expect(chunkThree([1,2,3,4,5], 10)).toEqual([[1,2,3,4,5]]);
    expect(chunkThree([1,2,3,4,5,"6","7",{a:1}], 10)).toEqual([[1,2,3,4,5,"6","7",{a:1}]]);
});

test('chunk using method 4', () => {
    expect(chunkForth([1,2,3,4], 2)).toEqual([[1,2], [3,4]]);
    expect(chunkForth([1,2,3,4,5], 2)).toEqual([[1,2], [3,4], [5]]);
    expect(chunkForth([1,2,3,4,5, 6, 7, 8], 3)).toEqual([[1,2,3], [4,5,6], [7,8]]);
    expect(chunkForth([1,2,3,4,5], 4)).toEqual([[1,2,3,4], [5]]);
    expect(chunkForth([1,2,3,4,5], 10)).toEqual([[1,2,3,4,5]]);
    expect(chunkForth([1,2,3,4,5,"6","7",{a:1}], 10)).toEqual([[1,2,3,4,5,"6","7",{a:1}]]);
});

test('chunk using method 5', () => {
    expect(chunkFifth([1,2,3,4], 2)).toEqual([[1,2], [3,4]]);
    expect(chunkFifth([1,2,3,4,5], 2)).toEqual([[1,2], [3,4], [5]]);
    expect(chunkFifth([1,2,3,4,5, 6, 7, 8], 3)).toEqual([[1,2,3], [4,5,6], [7,8]]);
    expect(chunkFifth([1,2,3,4,5], 4)).toEqual([[1,2,3,4], [5]]);
    expect(chunkFifth([1,2,3,4,5], 10)).toEqual([[1,2,3,4,5]]);
    expect(chunkFifth([1,2,3,4,5,"6","7",{a:1}], 10)).toEqual([[1,2,3,4,5,"6","7",{a:1}]]);
});