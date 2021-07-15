import { Utills } from './index';

describe('Utills', () => {
  it('check string is empty', () => {
    expect(Utills.CheckStringEmpty('')).toEqual(false);
    expect(Utills.CheckStringEmpty(' ')).toEqual(false);
    expect(Utills.CheckStringEmpty('Hello')).toEqual(true);
  });

  it('check number is empty', () => {
    expect(Utills.CheckNumberEmpty('')).toEqual(false);
    expect(Utills.CheckNumberEmpty(' ')).toEqual(false);
    expect(Utills.CheckNumberEmpty('5')).toEqual(true);
    expect(Utills.CheckNumberEmpty(5)).toEqual(true);
  });

  it('convert number to string', () => {
    expect(Utills.ConvertToString('')).toEqual('');
    expect(Utills.ConvertToString(5)).toEqual('5');
    expect(Utills.ConvertToString(10)).toEqual('10');
    expect(Utills.ConvertToString('-01')).toEqual('-01');
    expect(Utills.ConvertToString('-52')).toEqual('-52');
    expect(Utills.ConvertToString('5')).toEqual('5');
    expect(Utills.ConvertToString('-5')).toEqual('-5');
    expect(Utills.ConvertToString('-500')).toEqual('-500');
    expect(Utills.ConvertToString('01')).toEqual('01');
    expect(Utills.ConvertToString(543.21)).toEqual('543.21');
    expect(Utills.ConvertToString('.')).toEqual('.');
  });

  it('convert positive to negative number', () => {
    expect(Utills.ConvertNagativeInteger(5)).toEqual(-5);
    expect(Utills.ConvertNagativeInteger(10)).toEqual(-10);
    expect(Utills.ConvertNagativeInteger('-01')).toEqual(-1);
    expect(Utills.ConvertNagativeInteger('52')).toEqual(-52);
    expect(Utills.ConvertNagativeInteger(10.01)).toEqual(-10.01);
    expect(Utills.ConvertNagativeInteger('-01.01')).toEqual(-1.01);
    expect(Utills.ConvertNagativeInteger('52.03')).toEqual(-52.03);
  });

  it('convert to number', () => {
    expect(Utills.ConvertToNumber(5)).toEqual(5);
    expect(Utills.ConvertToNumber(10)).toEqual(10);
    expect(Utills.ConvertToNumber('-01')).toEqual(-1);
    expect(Utills.ConvertToNumber('52')).toEqual(52);
    expect(Utills.ConvertToNumber(10.01)).toEqual(10.01);
    expect(Utills.ConvertToNumber('01.01')).toEqual(1.01);
    expect(Utills.ConvertToNumber('52.03')).toEqual(52.03);
  });

  it('check array is empty', () => {
    expect(Utills.CheckArrayEmpty('')).toEqual(false);
    expect(Utills.CheckArrayEmpty([1, 2, 3])).toEqual(true);
    expect(Utills.CheckArrayEmpty(['a', 'b', 'c'])).toEqual(true);
    expect(Utills.CheckArrayEmpty([{ a: 1 }, { b: 1 }])).toEqual(true);
  });

  it('make string clean', () => {
    expect(Utills.ClearString('!!##33123][[/.Kaushik!!##":3][[/.')).toEqual(
      '33123kaushik3'
    );
  });

  it('convert string to array', () => {
    const finalArray = ['it', 'is', 'a', 'great', 'day'];
    expect(Utills.ConvertToArray('it is a great day', ' ')).toEqual(finalArray);
  });
});
