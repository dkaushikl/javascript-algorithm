import { ReverseInt } from './index';

describe('Reverse Int program', () => {
  it.skip('reverse int using method 1', () => {
    expect(ReverseInt.One(15)).toEqual(51);
    expect(ReverseInt.One(981)).toEqual(189);
    expect(ReverseInt.One(500)).toEqual(5);
    expect(ReverseInt.One(-15)).toEqual(-51);
    expect(ReverseInt.One(-90)).toEqual(-9);
    expect(ReverseInt.One(0)).toEqual(-0);
    expect(ReverseInt.One(321000)).toEqual(123);
  });

  it('reverse int using method 2', () => {
    expect(ReverseInt.Two(15)).toEqual(51);
    expect(ReverseInt.Two(981)).toEqual(189);
    expect(ReverseInt.Two(500)).toEqual(5);
    expect(ReverseInt.Two(-15)).toEqual(-51);
    expect(ReverseInt.Two(-90)).toEqual(-9);
    expect(ReverseInt.Two(null)).toEqual('');
    expect(ReverseInt.Two(0)).toEqual(-0);
    expect(ReverseInt.Two(undefined)).toEqual('');
    expect(ReverseInt.Two(321000)).toEqual(123);
    expect(ReverseInt.Two(543.21)).toEqual(12.345);
    expect(ReverseInt.Two(-543.21)).toEqual(-12.345);
  });

  it('reverse int using method 3', () => {
    expect(ReverseInt.Three(15)).toEqual(51);
    expect(ReverseInt.Three(981)).toEqual(189);
    expect(ReverseInt.Three(500)).toEqual(5);
    expect(ReverseInt.Three(-15)).toEqual(-51);
    expect(ReverseInt.Three(-90)).toEqual(-9);
    expect(ReverseInt.Three(null)).toEqual('');
    expect(ReverseInt.Three(0)).toEqual(-0);
    expect(ReverseInt.Three(undefined)).toEqual('');
    expect(ReverseInt.Three(321000)).toEqual(123);
    expect(ReverseInt.Three(543.21)).toEqual(12.345);
    expect(ReverseInt.Three(-543.21)).toEqual(-12.345);
  });

  it('reverse int using method 4', () => {
    expect(ReverseInt.Forth(15)).toEqual(51);
    expect(ReverseInt.Forth(981)).toEqual(189);
    expect(ReverseInt.Forth(500)).toEqual(5);
    expect(ReverseInt.Forth(-15)).toEqual(-51);
    expect(ReverseInt.Forth(-90)).toEqual(-9);
    expect(ReverseInt.Forth(null)).toEqual('');
    expect(ReverseInt.Forth(0)).toEqual(-0);
    expect(ReverseInt.Forth(undefined)).toEqual('');
    expect(ReverseInt.Forth(321000)).toEqual(123);
    expect(ReverseInt.Forth(543.21)).toEqual(12.345);
    expect(ReverseInt.Forth(-543.21)).toEqual(-12.345);
  });
});
