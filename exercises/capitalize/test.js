const { capitalizeOne, capitalizeTwo, capitalizeThree, capitalizeForth, capitalizeFifth, capitalizeSixth } = require('./index.js');

test('capitalize using method 1', () => {
    expect(capitalizeOne('rail safety')).toEqual('Rail Safety');
    expect(capitalizeOne('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeOne('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeOne('it is black day')).toEqual('It Is Black Day');
});

test('capitalize using method 2', () => {
    expect(capitalizeTwo('rail safety')).toEqual('Rail Safety');
    expect(capitalizeTwo('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeTwo('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeTwo('it is black day')).toEqual('It Is Black Day');
});
