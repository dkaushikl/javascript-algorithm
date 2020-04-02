const { maxCharMethodOne, maxCharMethodTwo, maxCharMethodThree } = require('./index.js');

test('maximum character using method 1', () => {
    expect(maxCharMethodOne("")).toEqual("");
    expect(maxCharMethodOne("null")).toEqual("l");
    expect(maxCharMethodOne(null)).toEqual("");
    expect(maxCharMethodOne(undefined)).toEqual("");
    expect(maxCharMethodOne("kaushik")).toEqual("k");
    expect(maxCharMethodOne("helllllo")).toEqual("l");
    expect(maxCharMethodOne("55555kaushik")).toEqual("5");
    expect(maxCharMethodOne("@@@123")).toEqual("@");
});

test('maximum character using method 2', () => {
    expect(maxCharMethodTwo("")).toEqual("");
    expect(maxCharMethodTwo("null")).toEqual("l");
    expect(maxCharMethodTwo(null)).toEqual("");
    expect(maxCharMethodTwo(undefined)).toEqual("");
    expect(maxCharMethodTwo("kaushik")).toEqual("k");
    expect(maxCharMethodTwo("helllllo")).toEqual("l");
    expect(maxCharMethodTwo("55555kaushik")).toEqual("5");
    expect(maxCharMethodTwo("@@@123")).toEqual("@");
});

test('maximum character using method 3', () => {
    expect(maxCharMethodThree("")).toEqual("");
    expect(maxCharMethodThree("null")).toEqual("l");
    expect(maxCharMethodThree(null)).toEqual("");
    expect(maxCharMethodThree(undefined)).toEqual("");
    expect(maxCharMethodThree("kaushik")).toEqual("k");
    expect(maxCharMethodThree("helllllo")).toEqual("l");
    expect(maxCharMethodThree("55555kaushik")).toEqual("5");
    expect(maxCharMethodThree("@@@123")).toEqual("@");
});

