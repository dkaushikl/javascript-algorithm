const ReverseString = require('./index.js');

describe('Reverse String program', function() {
  'use strict';

  it('reverse string using method 1', () => {
    expect(ReverseString.One('apple')).toEqual('elppa');
    expect(ReverseString.One('hello')).toEqual('olleh');
    expect(ReverseString.One('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.One('')).toEqual('');
    expect(ReverseString.One('null')).toEqual('llun');
    expect(ReverseString.One(null)).toEqual('');
    expect(ReverseString.One(undefined)).toEqual('');
  });

  it('reverse string using method 2', () => {
    expect(ReverseString.Second('apple')).toEqual('elppa');
    expect(ReverseString.Second('hello')).toEqual('olleh');
    expect(ReverseString.Second('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Second('')).toEqual('');
    expect(ReverseString.Second('null')).toEqual('llun');
    expect(ReverseString.Second(null)).toEqual('');
    expect(ReverseString.Second(undefined)).toEqual('');
  });

  it('reverse string using method 3', () => {
    expect(ReverseString.Third('apple')).toEqual('elppa');
    expect(ReverseString.Third('hello')).toEqual('olleh');
    expect(ReverseString.Third('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Third('')).toEqual('');
    expect(ReverseString.Third('null')).toEqual('llun');
    expect(ReverseString.Third(null)).toEqual('');
    expect(ReverseString.Third(undefined)).toEqual('');
  });

  it('reverse string using method 4', () => {
    expect(ReverseString.Forth('apple')).toEqual('elppa');
    expect(ReverseString.Forth('hello')).toEqual('olleh');
    expect(ReverseString.Forth('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Forth('')).toEqual('');
    expect(ReverseString.Forth('null')).toEqual('llun');
    expect(ReverseString.Forth(null)).toEqual('');
    expect(ReverseString.Forth(undefined)).toEqual('');
  });

  it('reverse string using method 5', () => {
    expect(ReverseString.Fifth('apple')).toEqual('elppa');
    expect(ReverseString.Fifth('hello')).toEqual('olleh');
    expect(ReverseString.Fifth('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Fifth('')).toEqual('');
    expect(ReverseString.Fifth('null')).toEqual('llun');
    expect(ReverseString.Fifth(null)).toEqual('');
    expect(ReverseString.Fifth(undefined)).toEqual('');
  });

  it('reverse string using method 6', () => {
    expect(ReverseString.Sixth('hello')).toEqual('olleh');
    expect(ReverseString.Sixth('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Sixth('')).toEqual('');
    expect(ReverseString.Sixth('null')).toEqual('llun');
    expect(ReverseString.Sixth(null)).toEqual('');
    expect(ReverseString.Sixth(undefined)).toEqual('');
  });
});
