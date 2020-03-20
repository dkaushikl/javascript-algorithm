const { reverseIntMethodOne } = require('./index.js');

test('reverse int using method 1', () => {
    expect(reverseIntMethodOne(15)).toEqual(51);
    expect(reverseIntMethodOne(981)).toEqual(189);
    expect(reverseIntMethodOne(500)).toEqual(5);
    expect(reverseIntMethodOne(-15)).toEqual(-51);
    expect(reverseIntMethodOne(-90)).toEqual(-9);
    expect(reverseIntMethodOne(null)).toEqual('');
    expect(reverseIntMethodOne(0)).toEqual(-0);
    expect(reverseIntMethodOne(undefined)).toEqual('');
});