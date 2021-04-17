import { Anagram } from './index';

describe('Anagram', () => {
  it('anagram first method', () => {
    expect(Anagram.One('Rail Safety', 'fairy tales')).toEqual(true);
    expect(Anagram.One('Rail! Safety!', 'fairy tales')).toEqual(true);
    expect(Anagram.One('Hi there', 'Bye there')).toEqual(false);
    expect(Anagram.One('Hi there', 'ye there')).toEqual(false);
    expect(Anagram.One('MotherInLaw', 'HitlerWoman ')).toEqual(true);
  });

  it('anagram second method', () => {
    expect(Anagram.Two('Rail Safety', 'fairy tales')).toEqual(true);
    expect(Anagram.Two('Rail! Safety!', 'fairy tales')).toEqual(true);
    expect(Anagram.Two('Hi there', 'Bye there')).toEqual(false);
    expect(Anagram.Two('Hi there', 'ye there')).toEqual(false);
    expect(Anagram.Two('MotherInLaw', 'HitlerWoman ')).toEqual(true);
  });

  it('anagram third method', () => {
    expect(Anagram.Three('Rail Safety', 'fairy tales')).toEqual(true);
    expect(Anagram.Three('Rail! Safety!', 'fairy tales')).toEqual(true);
    expect(Anagram.Three('Hi there', 'Bye there')).toEqual(false);
    expect(Anagram.Three('Hi there', 'ye there')).toEqual(false);
    expect(Anagram.Three('MotherInLaw', 'HitlerWoman ')).toEqual(true);
  });
});
