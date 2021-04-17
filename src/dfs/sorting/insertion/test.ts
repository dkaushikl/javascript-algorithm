const BubbleSort = require('./index.js');

describe('Utills', () => {
  it('Number sort through recursive', () => {
    expect(BubbleSort.numberSortRecursive([5, 1, 4, 2, 8], 0, 0)).toEqual([1, 2, 4, 5, 8]);
    expect(BubbleSort.numberSortRecursive([4, 1, 3, 9, 7], 0, 0)).toEqual([1, 3, 4, 7, 9]);
  });

  it('String sort through recursive', () => {
    expect(
      BubbleSort.stringSortRecursive(['GeeksforGeeks', 'Quiz', 'Practice', 'GAa', 'Gblogs', 'GAb', 'Coding'], 0, 0),
    ).toEqual(['Coding', 'GAa', 'GAb', 'Gblogs', 'GeeksforGeeks', 'Practice', 'Quiz']);
  });
});
