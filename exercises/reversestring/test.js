const { reverseMethodOne, reverseMethodSecond, reverseMethodThird, reverseMethodForth, reverseMethodFifth, reverseMethodSixth } = require('./index.js');

test('reverse string using method 1', () => {
    expect(reverseMethodOne("apple")).toEqual("elppa");
    expect(reverseMethodOne("hello")).toEqual("olleh");
    expect(reverseMethodOne("Greetings!")).toEqual("!sgniteerG");
    expect(reverseMethodOne("")).toEqual("");
    expect(reverseMethodOne("null")).toEqual("llun");
    expect(reverseMethodOne(null)).toEqual("");
    expect(reverseMethodOne(undefined)).toEqual("");
});

test('reverse string using method 2', () => {
    expect(reverseMethodSecond("apple")).toEqual("elppa");
    expect(reverseMethodSecond("hello")).toEqual("olleh");
    expect(reverseMethodSecond("Greetings!")).toEqual("!sgniteerG");
    expect(reverseMethodSecond("")).toEqual("");
    expect(reverseMethodSecond("null")).toEqual("llun");
    expect(reverseMethodSecond(null)).toEqual("");
    expect(reverseMethodSecond(undefined)).toEqual("");
});

test('reverse string using method 3', () => {
    expect(reverseMethodThird("apple")).toEqual("elppa");
    expect(reverseMethodThird("hello")).toEqual("olleh");
    expect(reverseMethodThird("Greetings!")).toEqual("!sgniteerG");
    expect(reverseMethodThird("")).toEqual("");
    expect(reverseMethodThird("null")).toEqual("llun");
    expect(reverseMethodThird(null)).toEqual("");
    expect(reverseMethodThird(undefined)).toEqual("");
});

test('reverse string using method 4', () => {
    expect(reverseMethodForth("apple")).toEqual("elppa");
    expect(reverseMethodForth("hello")).toEqual("olleh");
    expect(reverseMethodForth("Greetings!")).toEqual("!sgniteerG");
    expect(reverseMethodForth("")).toEqual("");
    expect(reverseMethodForth("null")).toEqual("llun");
    expect(reverseMethodForth(null)).toEqual("");
    expect(reverseMethodForth(undefined)).toEqual("");
});

test('reverse string using method 5', () => {
    expect(reverseMethodFifth("apple")).toEqual("elppa");
    expect(reverseMethodFifth("hello")).toEqual("olleh");
    expect(reverseMethodFifth("Greetings!")).toEqual("!sgniteerG");
    expect(reverseMethodFifth("")).toEqual("");
    expect(reverseMethodFifth("null")).toEqual("llun");
    expect(reverseMethodFifth(null)).toEqual("");
    expect(reverseMethodFifth(undefined)).toEqual("");
});

test('reverse string using method 6', () => {
    expect(reverseMethodSixth("hello")).toEqual("olleh");
    expect(reverseMethodSixth("Greetings!")).toEqual("!sgniteerG");
    expect(reverseMethodSixth("")).toEqual("");
    expect(reverseMethodSixth("null")).toEqual("llun");
    expect(reverseMethodSixth(null)).toEqual("");
    expect(reverseMethodSixth(undefined)).toEqual("");
});