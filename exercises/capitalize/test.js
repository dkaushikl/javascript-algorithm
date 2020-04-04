const { capitalizeOne, capitalizeTwo, capitalizeThree, capitalizeForth, capitalizeFifth, capitalizeSixth } = require('./index.js');

test('capitalize using method 1', () => {
    expect(capitalizeOne('rail safety')).toEqual('Rail Safety');
    expect(capitalizeOne('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeOne('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeOne('it is black day')).toEqual('It Is Black Day');
    expect(capitalizeOne('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(capitalizeOne('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(capitalizeOne('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
});

test('capitalize using method 2', () => {
    expect(capitalizeTwo('rail safety')).toEqual('Rail Safety');
    expect(capitalizeTwo('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeTwo('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeTwo('it is black day')).toEqual('It Is Black Day');
    expect(capitalizeTwo('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(capitalizeTwo('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(capitalizeTwo('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
});

test('capitalize using method 3', () => {
    expect(capitalizeThree('rail safety')).toEqual('Rail Safety');
    expect(capitalizeThree('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeThree('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeThree('it is black day')).toEqual('It Is Black Day');
    expect(capitalizeThree('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(capitalizeThree('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(capitalizeThree('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
});

test('capitalize using method 4', () => {
    expect(capitalizeForth('rail safety')).toEqual('Rail Safety');
    expect(capitalizeForth('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeForth('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeForth('it is black day')).toEqual('It Is Black Day');
    expect(capitalizeForth('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(capitalizeForth('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(capitalizeForth('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
});

test('capitalize using method 5', () => {
    expect(capitalizeFifth('rail safety')).toEqual('Rail Safety');
    expect(capitalizeFifth('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeFifth('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeFifth('it is black day')).toEqual('It Is Black Day');
    expect(capitalizeFifth('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(capitalizeFifth('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(capitalizeFifth('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
});

test('capitalize using method 6', () => {
    expect(capitalizeSixth('rail safety')).toEqual('Rail Safety');
    expect(capitalizeSixth('it is a great day')).toEqual('It Is A Great Day');
    expect(capitalizeSixth('it was warm day')).toEqual('It Was Warm Day');
    expect(capitalizeSixth('it is black day')).toEqual('It Is Black Day');
    expect(capitalizeSixth('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(capitalizeSixth('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(capitalizeSixth('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
});
