const { clearString, checkStringEmpty, checkNumberEmpty, convertToString, convertNagativeInteger, convertToNumber, checkArrayEmpty } = require('./index.js');

test('check string is empty', () => {
    expect(checkStringEmpty('')).toEqual(false);
    expect(checkStringEmpty()).toEqual(false);
    expect(checkStringEmpty(null)).toEqual(false);
    expect(checkStringEmpty(undefined)).toEqual(false);
    expect(checkStringEmpty(' ')).toEqual(false);
    expect(checkStringEmpty('Hello')).toEqual(true);
});

test('check number is empty', () => {
    expect(checkNumberEmpty('')).toEqual(false);
    expect(checkNumberEmpty()).toEqual(false);
    expect(checkNumberEmpty(null)).toEqual(false);
    expect(checkNumberEmpty(undefined)).toEqual(false);
    expect(checkNumberEmpty(' ')).toEqual(false);
    expect(checkNumberEmpty('5')).toEqual(true);
    expect(checkNumberEmpty(5)).toEqual(true);
});

test('convert number to string', () => {
    expect(convertToString('')).toEqual('');
    expect(convertToString()).toEqual('');
    expect(convertToString(null)).toEqual('');
    expect(convertToString(undefined)).toEqual('');
    expect(convertToString(5)).toEqual('5');
    expect(convertToString(10)).toEqual('10');
    expect(convertToString('-01')).toEqual('-01');
    expect(convertToString('-52')).toEqual('-52');
    expect(convertToString('5')).toEqual('5');
    expect(convertToString('-5')).toEqual('-5');
    expect(convertToString('-500')).toEqual('-500');
    expect(convertToString('01')).toEqual('01');
    expect(convertToString(543.2100)).toEqual('543.21');
    expect(convertToString('.')).toEqual('.');
});

test('convert positive to negative number', () => {
    expect(convertNagativeInteger('')).toEqual('');
    expect(convertNagativeInteger()).toEqual('');
    expect(convertNagativeInteger(null)).toEqual('');
    expect(convertNagativeInteger(undefined)).toEqual('');
    expect(convertNagativeInteger(5)).toEqual(-5);
    expect(convertNagativeInteger(10)).toEqual(-10);
    expect(convertNagativeInteger('-01')).toEqual(-1);
    expect(convertNagativeInteger('52')).toEqual(-52);
    expect(convertNagativeInteger(10.01)).toEqual(-10.01);
    expect(convertNagativeInteger('-01.01')).toEqual(-1.01);
    expect(convertNagativeInteger('52.03')).toEqual(-52.03);
});

test('convert to number', () => {
    expect(convertToNumber('')).toEqual('');
    expect(convertToNumber()).toEqual('');
    expect(convertToNumber(null)).toEqual('');
    expect(convertToNumber(undefined)).toEqual('');
    expect(convertToNumber(5)).toEqual(5);
    expect(convertToNumber(10)).toEqual(10);
    expect(convertToNumber('-01')).toEqual(-1);
    expect(convertToNumber('52')).toEqual(52);
    expect(convertToNumber(10.01)).toEqual(10.01);
    expect(convertToNumber('01.01')).toEqual(1.01);
    expect(convertToNumber('52.03')).toEqual(52.03);
});

test('check array is empty', () => {
    expect(checkArrayEmpty('')).toEqual(false);
    expect(checkArrayEmpty()).toEqual(false);
    expect(checkArrayEmpty(null)).toEqual(false);
    expect(checkArrayEmpty(undefined)).toEqual(false);
    expect(checkArrayEmpty([1, 2, 3])).toEqual(true);
    expect(checkArrayEmpty(['a', 'b', 'c'])).toEqual(true);
    expect(checkArrayEmpty([{a: 1}, {b: 1}])).toEqual(true);
});

test('make string clean', () => {
    expect(clearString('!!##33123][[/.Kaushik!!##":3][[/.')).toEqual('33123kaushik3');
});
