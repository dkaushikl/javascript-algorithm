const { maxCharMethodOne } = require('./index.js');

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


