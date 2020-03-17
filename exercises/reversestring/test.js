const { reverseMethodOne, reverseMethodSecond, reverseMethodThird, reverseMethodForth } = require('./index.js');

test('reverse string using method 1', () => {
    expect(reverseMethodOne("apple")).toEqual("elppa");
    expect(reverseMethodOne("hello")).toEqual("olleh");
    expect(reverseMethodOne("Greetings!")).toEqual("!sgniteerG");
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

test('reverse string using method 4', () => {
    expect(reverseMethodForth("apple")).toEqual("elppa");
    expect(reverseMethodForth("hello")).toEqual("olleh");
    expect(reverseMethodForth("")).toEqual("");
    expect(reverseMethodForth("Kaushik")).toEqual("kihsuaK");
    expect(reverseMethodForth("456123")).toEqual("321654");
});