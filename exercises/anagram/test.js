const { anagramOne, anagramTwo, anagramThree } = require('./index.js');

test('anagram using method 1', () => {
    expect(anagramOne('Rail Safety', 'fairy tales')).toEqual(true);
    expect(anagramOne('Rail! Safety!', 'fairy tales')).toEqual(true);
    expect(anagramOne(`Hi there`, `Bye there`)).toEqual(false);
    expect(anagramOne(`Hi there`, `ye there`)).toEqual(false);
    expect(anagramOne(`MotherInLaw`, `HitlerWoman `)).toEqual(true);
});

test('anagram using method 2', () => {
    expect(anagramTwo('Rail Safety', 'fairy tales')).toEqual(true);
    expect(anagramTwo('Rail! Safety!', 'fairy tales')).toEqual(true);
    expect(anagramTwo(`Hi there`, `Bye there`)).toEqual(false);
    expect(anagramTwo(`Hi there`, `ye there`)).toEqual(false);
    expect(anagramTwo(`MotherInLaw`, `HitlerWoman `)).toEqual(true);
});

test('anagram using method 3', () => {
    expect(anagramThree('Rail Safety', 'fairy tales')).toEqual(true);
    expect(anagramThree('Rail! Safety!', 'fairy tales')).toEqual(true);
    expect(anagramThree(`Hi there`, `Bye there`)).toEqual(false);
    expect(anagramThree(`Hi there`, `ye there`)).toEqual(false);
    expect(anagramThree(`MotherInLaw`, `HitlerWoman `)).toEqual(true);
});
