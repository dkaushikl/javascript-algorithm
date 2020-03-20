const { reverseIntMethodOne, reverseIntMethodTwo, reverseIntMethodThree, reverseIntMethodForth } = require('./index.js');

test('reverse int using method 1', () => {
    expect(reverseIntMethodOne(15)).toEqual(51);
    expect(reverseIntMethodOne(981)).toEqual(189);
    expect(reverseIntMethodOne(500)).toEqual(5);
    expect(reverseIntMethodOne(-15)).toEqual(-51);
    expect(reverseIntMethodOne(-90)).toEqual(-9);
    expect(reverseIntMethodOne(null)).toEqual('');
    expect(reverseIntMethodOne(0)).toEqual(-0);
    expect(reverseIntMethodOne(undefined)).toEqual('');
    expect(reverseIntMethodOne(321000)).toEqual(123);
});

test('reverse int using method 2', () => {
    expect(reverseIntMethodTwo(15)).toEqual(51);
    expect(reverseIntMethodTwo(981)).toEqual(189);
    expect(reverseIntMethodTwo(500)).toEqual(5);
    expect(reverseIntMethodTwo(-15)).toEqual(-51);
    expect(reverseIntMethodTwo(-90)).toEqual(-9);
    expect(reverseIntMethodTwo(null)).toEqual('');
    expect(reverseIntMethodTwo(0)).toEqual(-0);
    expect(reverseIntMethodTwo(undefined)).toEqual('');
    expect(reverseIntMethodTwo(321000)).toEqual(123);
    expect(reverseIntMethodTwo(543.2100)).toEqual(12.345);
    expect(reverseIntMethodTwo(-543.2100)).toEqual(-12.345);
});

test('reverse int using method 3', () => {
    expect(reverseIntMethodThree(15)).toEqual(51);
    expect(reverseIntMethodThree(981)).toEqual(189);
    expect(reverseIntMethodThree(500)).toEqual(5);
    expect(reverseIntMethodThree(-15)).toEqual(-51);
    expect(reverseIntMethodThree(-90)).toEqual(-9);
    expect(reverseIntMethodThree(null)).toEqual('');
    expect(reverseIntMethodThree(0)).toEqual(-0);
    expect(reverseIntMethodThree(undefined)).toEqual('');
    expect(reverseIntMethodThree(321000)).toEqual(123);
    expect(reverseIntMethodThree(543.2100)).toEqual(12.345);
    expect(reverseIntMethodThree(-543.2100)).toEqual(-12.345);
});

test('reverse int using method 4', () => {
    expect(reverseIntMethodForth(15)).toEqual(51);
    expect(reverseIntMethodForth(981)).toEqual(189);
    expect(reverseIntMethodForth(500)).toEqual(5);
    expect(reverseIntMethodForth(-15)).toEqual(-51);
    expect(reverseIntMethodForth(-90)).toEqual(-9);
    expect(reverseIntMethodForth(null)).toEqual('');
    expect(reverseIntMethodForth(0)).toEqual(-0);
    expect(reverseIntMethodForth(undefined)).toEqual('');
    expect(reverseIntMethodForth(321000)).toEqual(123);
    expect(reverseIntMethodForth(543.2100)).toEqual(12.345);
    expect(reverseIntMethodForth(-543.2100)).toEqual(-12.345);
});