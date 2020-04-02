const { anagramOne } = require('./index.js');

test('anagram using method 1', () => {
    expect(anagramOne('Rail Safety', 'fairy tales')).toEqual(true);
    expect(anagramOne('Rail! Safety!', 'fairy tales')).toEqual(true);
    expect(anagramOne(`Hi there`, `Bye there`)).toEqual(false);
});
