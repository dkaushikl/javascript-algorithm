const utils = require('./index.js');

test('check string is empty', () => {
    expect(utils.checkStringEmpty('')).toEqual(false);
    expect(utils.checkStringEmpty()).toEqual(false);
    expect(utils.checkStringEmpty(null)).toEqual(false);
    expect(utils.checkStringEmpty(undefined)).toEqual(false);
    expect(utils.checkStringEmpty(' ')).toEqual(false);
    expect(utils.checkStringEmpty('Hello')).toEqual(true);
});

test('check number is empty', () => {
    expect(utils.checkNumberEmpty('')).toEqual(false);
    expect(utils.checkNumberEmpty()).toEqual(false);
    expect(utils.checkNumberEmpty(null)).toEqual(false);
    expect(utils.checkNumberEmpty(undefined)).toEqual(false);
    expect(utils.checkNumberEmpty(' ')).toEqual(false);
    expect(utils.checkNumberEmpty('5')).toEqual(true);
    expect(utils.checkNumberEmpty(5)).toEqual(true);
});

test('convert number to string', () => {
    expect(utils.convertToString('')).toEqual('');
    expect(utils.convertToString()).toEqual('');
    expect(utils.convertToString(null)).toEqual('');
    expect(utils.convertToString(undefined)).toEqual('');
    expect(utils.convertToString(5)).toEqual('5');
    expect(utils.convertToString(10)).toEqual('10');
    expect(utils.convertToString('-01')).toEqual('-01');
    expect(utils.convertToString('-52')).toEqual('-52');
    expect(utils.convertToString('5')).toEqual('5');
    expect(utils.convertToString('-5')).toEqual('-5');
    expect(utils.convertToString('-500')).toEqual('-500');
    expect(utils.convertToString('01')).toEqual('01');
    expect(utils.convertToString(543.2100)).toEqual('543.21');
    expect(utils.convertToString('.')).toEqual('.');
});

test('convert positive to negative number', () => {
    expect(utils.convertNagativeInteger('')).toEqual('');
    expect(utils.convertNagativeInteger()).toEqual('');
    expect(utils.convertNagativeInteger(null)).toEqual('');
    expect(utils.convertNagativeInteger(undefined)).toEqual('');
    expect(utils.convertNagativeInteger(5)).toEqual(-5);
    expect(utils.convertNagativeInteger(10)).toEqual(-10);
    expect(utils.convertNagativeInteger('-01')).toEqual(-1);
    expect(utils.convertNagativeInteger('52')).toEqual(-52);
    expect(utils.convertNagativeInteger(10.01)).toEqual(-10.01);
    expect(utils.convertNagativeInteger('-01.01')).toEqual(-1.01);
    expect(utils.convertNagativeInteger('52.03')).toEqual(-52.03);
});

test('convert to number', () => {
    expect(utils.convertToNumber('')).toEqual('');
    expect(utils.convertToNumber()).toEqual('');
    expect(utils.convertToNumber(null)).toEqual('');
    expect(utils.convertToNumber(undefined)).toEqual('');
    expect(utils.convertToNumber(5)).toEqual(5);
    expect(utils.convertToNumber(10)).toEqual(10);
    expect(utils.convertToNumber('-01')).toEqual(-1);
    expect(utils.convertToNumber('52')).toEqual(52);
    expect(utils.convertToNumber(10.01)).toEqual(10.01);
    expect(utils.convertToNumber('01.01')).toEqual(1.01);
    expect(utils.convertToNumber('52.03')).toEqual(52.03);
});

test('check array is empty', () => {
    expect(utils.checkArrayEmpty('')).toEqual(false);
    expect(utils.checkArrayEmpty()).toEqual(false);
    expect(utils.checkArrayEmpty(null)).toEqual(false);
    expect(utils.checkArrayEmpty(undefined)).toEqual(false);
    expect(utils.checkArrayEmpty([1, 2, 3])).toEqual(true);
    expect(utils.checkArrayEmpty(['a', 'b', 'c'])).toEqual(true);
    expect(utils.checkArrayEmpty([{a: 1}, {b: 1}])).toEqual(true);
});

test('make string clean', () => {
    expect(utils.clearString('!!##33123][[/.Kaushik!!##":3][[/.')).toEqual('33123kaushik3');
});


test('convert string to array', () => {
    const finalArray = ['it', 'is', 'a', 'great', 'day'];
    expect(utils.convertToArray('it is a great day', ' ')).toEqual(finalArray);
});
