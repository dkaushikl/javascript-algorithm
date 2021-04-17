import { ReverseString } from './index';

describe('Reverse String  ', () => {
  it('reverse string using method 1', () => {
    expect(ReverseString.One('apple')).toEqual('elppa');
    expect(ReverseString.One('hello')).toEqual('olleh');
    expect(ReverseString.One('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.One('')).toEqual('');
    expect(ReverseString.One('null')).toEqual('llun');
  });

  it('reverse string using method 2', () => {
    expect(ReverseString.Second('apple')).toEqual('elppa');
    expect(ReverseString.Second('hello')).toEqual('olleh');
    expect(ReverseString.Second('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Second('')).toEqual('');
    expect(ReverseString.Second('null')).toEqual('llun');
  });

  it('reverse string using method 3', () => {
    expect(ReverseString.Third('apple')).toEqual('elppa');
    expect(ReverseString.Third('hello')).toEqual('olleh');
    expect(ReverseString.Third('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Third('')).toEqual('');
    expect(ReverseString.Third('null')).toEqual('llun');
  });

  it('reverse string using method 4', () => {
    expect(ReverseString.Forth('apple')).toEqual('elppa');
    expect(ReverseString.Forth('hello')).toEqual('olleh');
    expect(ReverseString.Forth('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Forth('')).toEqual('');
    expect(ReverseString.Forth('null')).toEqual('llun');
  });

  it('reverse string using method 5', () => {
    expect(ReverseString.Fifth('apple')).toEqual('elppa');
    expect(ReverseString.Fifth('hello')).toEqual('olleh');
    expect(ReverseString.Fifth('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Fifth('')).toEqual('');
    expect(ReverseString.Fifth('null')).toEqual('llun');
  });

  it('reverse string using method 6', () => {
    expect(ReverseString.Sixth('hello')).toEqual('olleh');
    expect(ReverseString.Sixth('Greetings!')).toEqual('!sgniteerG');
    expect(ReverseString.Sixth('')).toEqual('');
    expect(ReverseString.Sixth('null')).toEqual('llun');
  });
});
