const Palindrom = require('./index.js');

describe('Palindrom program', function () {
  'use strict';

  it('palindrom using method 1', () => {
    expect(Palindrom.One('appa')).toEqual(true);
    expect(Palindrom.One('not a palindrome')).toEqual(false);
    expect(Palindrom.One('A man, a plan, a canal. Panama')).toEqual(true);
    expect(Palindrom.One('never odd or even')).toEqual(true);
    expect(Palindrom.One('almostomla')).toEqual(false);
    expect(Palindrom.One('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(Palindrom.One('1 eye for of 1 eye.')).toEqual(false);
    expect(Palindrom.One('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
  });


  it('palindrom using method 2', () => {
    expect(Palindrom.Two('appa')).toEqual(true);
    expect(Palindrom.Two('not a palindrome')).toEqual(false);
    expect(Palindrom.Two('A man, a plan, a canal. Panama')).toEqual(true);
    expect(Palindrom.Two('never odd or even')).toEqual(true);
    expect(Palindrom.Two('almostomla')).toEqual(false);
    expect(Palindrom.Two('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(Palindrom.Two('1 eye for of 1 eye.')).toEqual(false);
    expect(Palindrom.Two('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
  });

  it('palindrom using method 3', () => {
    expect(Palindrom.Three('appa')).toEqual(true);
    expect(Palindrom.Three('not a palindrome')).toEqual(false);
    expect(Palindrom.Three('A man, a plan, a canal. Panama')).toEqual(true);
    expect(Palindrom.Three('never odd or even')).toEqual(true);
    expect(Palindrom.Three('almostomla')).toEqual(false);
    expect(Palindrom.Three('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(Palindrom.Three('1 eye for of 1 eye.')).toEqual(false);
    expect(Palindrom.Three('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
  });

  it('palindrom using method 4', () => {
    expect(Palindrom.Forth('appa')).toEqual(true);
    expect(Palindrom.Forth('not a palindrome')).toEqual(false);
    expect(Palindrom.Forth('A man, a plan, a canal. Panama')).toEqual(true);
    expect(Palindrom.Forth('never odd or even')).toEqual(true);
    expect(Palindrom.Forth('almostomla')).toEqual(false);
    expect(Palindrom.Forth('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(Palindrom.Forth('1 eye for of 1 eye.')).toEqual(false);
    expect(Palindrom.Forth('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
  });

  it('palindrom using method 5', () => {
    expect(Palindrom.Fifth('appa')).toEqual(true);
    expect(Palindrom.Fifth('not a palindrome')).toEqual(false);
    expect(Palindrom.Fifth('A man, a plan, a canal. Panama')).toEqual(true);
    expect(Palindrom.Fifth('never odd or even')).toEqual(true);
    expect(Palindrom.Fifth('almostomla')).toEqual(false);
    expect(Palindrom.Fifth('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(Palindrom.Fifth('1 eye for of 1 eye.')).toEqual(false);
    expect(Palindrom.Fifth('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
  });
});
