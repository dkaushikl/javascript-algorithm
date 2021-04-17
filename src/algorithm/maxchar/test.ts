import { MaxChar } from './index';

describe('Maximum Character', () => {
  it('maximum character using method 1', () => {
    expect(MaxChar.One('')).toEqual('');
    expect(MaxChar.One('null')).toEqual('l');
    expect(MaxChar.One('kaushik')).toEqual('k');
    expect(MaxChar.One('helllllo')).toEqual('l');
    expect(MaxChar.One('55555kaushik')).toEqual('5');
    expect(MaxChar.One('@@@123')).toEqual('@');
  });

  it('maximum character using method 2', () => {
    expect(MaxChar.Two('')).toEqual('');
    expect(MaxChar.Two('null')).toEqual('l');
    expect(MaxChar.Two('kaushik')).toEqual('k');
    expect(MaxChar.Two('helllllo')).toEqual('l');
    expect(MaxChar.Two('55555kaushik')).toEqual('5');
    expect(MaxChar.Two('@@@123')).toEqual('@');
  });

  it('maximum character using method 3', () => {
    expect(MaxChar.Three('')).toEqual('');
    expect(MaxChar.Three('null')).toEqual('l');
    expect(MaxChar.Three('kaushik')).toEqual('k');
    expect(MaxChar.Three('helllllo')).toEqual('l');
    expect(MaxChar.Three('55555kaushik')).toEqual('5');
    expect(MaxChar.Three('@@@123')).toEqual('@');
  });
});
