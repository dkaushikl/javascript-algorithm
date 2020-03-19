const { checkStringEmpty, checkNumberEmpty } = require('./index.js');

test('check string is empty', () => {
    expect(checkStringEmpty("")).toEqual(false);
    expect(checkStringEmpty()).toEqual(false);
    expect(checkStringEmpty(null)).toEqual(false);
    expect(checkStringEmpty(undefined)).toEqual(false);
    expect(checkStringEmpty(" ")).toEqual(false);
    expect(checkStringEmpty("Hello")).toEqual(true);
});

test('check number is empty', () => {
    // expect(checkNumberEmpty("")).toEqual(false);
    // expect(checkNumberEmpty()).toEqual(false);
    // expect(checkNumberEmpty(null)).toEqual(false);
    expect(checkNumberEmpty(undefined)).toEqual(false);
    // expect(checkNumberEmpty(" ")).toEqual(false);
    // expect(checkNumberEmpty("5")).toEqual(true);
    // expect(checkNumberEmpty(5)).toEqual(true);
});