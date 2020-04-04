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

test('capitalize using method 3', () => {
    expect(capitalizeThree('rail safety')).toEqual('Rail Safety');
    expect(capitalizeThree('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeThree('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeThree('it is black day')).toEqual('It Is Black Day');
});

test('capitalize using method 4', () => {
    expect(capitalizeForth('rail safety')).toEqual('Rail Safety');
    expect(capitalizeForth('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeForth('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeForth('it is black day')).toEqual('It Is Black Day');
});

test('capitalize using method 5', () => {
    expect(capitalizeFifth('rail safety')).toEqual('Rail Safety');
    expect(capitalizeFifth('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeFifth('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeFifth('it is black day')).toEqual('It Is Black Day');
});

test('capitalize using method 6', () => {
    expect(capitalizeSixth('rail safety')).toEqual('Rail Safety');
    expect(capitalizeSixth('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeSixth('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeSixth('it is black day')).toEqual('It Is Black Day');
});
