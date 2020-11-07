const Capitalize = require('./index.js');

describe('Capitalize', function() {
  'use strict';

  it('capitalize using method 1', () => {
    expect(Capitalize.One('rail safety')).toEqual('Rail Safety');
    expect(Capitalize.One('it is a great day')).toEqual('It Is A Great Day');
    expect(Capitalize.One('it was warm day')).toEqual('It Was Warm Day');
    expect(Capitalize.One('it is black day')).toEqual('It Is Black Day');
    expect(Capitalize.One('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(Capitalize.One('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(Capitalize.One('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
  });

  it('capitalize using method 2', () => {
    expect(Capitalize.Two('rail safety')).toEqual('Rail Safety');
    expect(Capitalize.Two('it is a great day')).toEqual('It Is A Great Day');
    expect(Capitalize.Two('it was warm day')).toEqual('It Was Warm Day');
    expect(Capitalize.Two('it is black day')).toEqual('It Is Black Day');
    expect(Capitalize.Two('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(Capitalize.Two('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(Capitalize.Two('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
  });

  it('capitalize using method 3', () => {
    expect(Capitalize.Three('rail safety')).toEqual('Rail Safety');
    expect(Capitalize.Three('it is a great day')).toEqual('It Is A Great Day');
    expect(Capitalize.Three('it was warm day')).toEqual('It Was Warm Day');
    expect(Capitalize.Three('it is black day')).toEqual('It Is Black Day');
    expect(Capitalize.Three('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(Capitalize.Three('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(Capitalize.Three('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
  });

  it('capitalize using method 4', () => {
    expect(Capitalize.Forth('rail safety')).toEqual('Rail Safety');
    expect(Capitalize.Forth('it is a great day')).toEqual('It Is A Great Day');
    expect(Capitalize.Forth('it was warm day')).toEqual('It Was Warm Day');
    expect(Capitalize.Forth('it is black day')).toEqual('It Is Black Day');
    expect(Capitalize.Forth('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(Capitalize.Forth('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(Capitalize.Forth('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
  });

  it('capitalize using method 5', () => {
    expect(Capitalize.Fifth('rail safety')).toEqual('Rail Safety');
    expect(Capitalize.Fifth('it is a great day')).toEqual('It Is A Great Day');
    expect(Capitalize.Fifth('it was warm day')).toEqual('It Was Warm Day');
    expect(Capitalize.Fifth('it is black day')).toEqual('It Is Black Day');
    expect(Capitalize.Fifth('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(Capitalize.Fifth('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(Capitalize.Fifth('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
  });

  it('capitalize using method 6', () => {
    expect(Capitalize.Sixth('rail safety')).toEqual('Rail Safety');
    expect(Capitalize.Sixth('it is a great day')).toEqual('It Is A Great Day');
    expect(Capitalize.Sixth('it was warm day')).toEqual('It Was Warm Day');
    expect(Capitalize.Sixth('it is black day')).toEqual('It Is Black Day');
    expect(Capitalize.Sixth('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(Capitalize.Sixth('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(Capitalize.Sixth('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
  });

  it('capitalize using method 7', () => {
    expect(Capitalize.Seventh('rail safety')).toEqual('Rail Safety');
    expect(Capitalize.Seventh('it is a great day')).toEqual('It Is A Great Day');
    expect(Capitalize.Seventh('it was warm day')).toEqual('It Was Warm Day');
    expect(Capitalize.Seventh('it is black day')).toEqual('It Is Black Day');
    expect(Capitalize.Seventh('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(Capitalize.Seventh('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(Capitalize.Seventh('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
  });

  it('capitalize using method 8', () => {
    expect(Capitalize.Eighth('rail safety')).toEqual('Rail Safety');
    expect(Capitalize.Eighth('it is a great day')).toEqual('It Is A Great Day');
    expect(Capitalize.Eighth('it was warm day')).toEqual('It Was Warm Day');
    expect(Capitalize.Eighth('it is black day')).toEqual('It Is Black Day');
    expect(Capitalize.Eighth('I’m a little tea pot')).toEqual('I’m A Little Tea Pot');
    expect(Capitalize.Eighth('sHoRt AnD sToUt')).toEqual('Short And Stout');
    expect(Capitalize.Eighth('HERE IS MY HANDLE HERE IS MY SPOUT')).toEqual('Here Is My Handle Here Is My Spout');
  });
});
