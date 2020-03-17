const { reverseMethodOne, reverseMethodSecond, reverseMethodThird } = require('./index.js');

test('reverse string using method 1', () => {
    expect(reverseMethodOne("apple")).toEqual("elppa");
    expect(reverseMethodOne("hello")).toEqual("olleh");
});

test('reverse string using method 2', () => {
    expect(reverseMethodSecond("apple")).toEqual("elppa");
    expect(reverseMethodSecond("hello")).toEqual("olleh");
});

test('reverse string using method 3', () => {
    expect(reverseMethodThird("apple")).toEqual("elppa");
    expect(reverseMethodThird("hello")).toEqual("olleh");
    expect(reverseMethodThird("")).toEqual("");
    expect(reverseMethodThird("Kaushik")).toEqual("kihsuaK");
    expect(reverseMethodThird("456123")).toEqual("321654");
});