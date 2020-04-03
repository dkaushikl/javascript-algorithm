const { palindromMethodOne, palindromMethodTwo, palindromMethodThree, palindromMethodForth, palindromMethodFifth } = require('./index.js');

test('palindrom using method 1', () => {
    expect(palindromMethodOne('appa')).toEqual(true);
    expect(palindromMethodOne('not a palindrome')).toEqual(false);
    expect(palindromMethodOne('A man, a plan, a canal. Panama')).toEqual(true);
    expect(palindromMethodOne('never odd or even')).toEqual(true);
    expect(palindromMethodOne('almostomla')).toEqual(false);
    expect(palindromMethodOne('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(palindromMethodOne('1 eye for of 1 eye.')).toEqual(false);
    expect(palindromMethodOne('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
});


test('palindrom using method 2', () => {
    expect(palindromMethodTwo('appa')).toEqual(true);
    expect(palindromMethodTwo('not a palindrome')).toEqual(false);
    expect(palindromMethodTwo('A man, a plan, a canal. Panama')).toEqual(true);
    expect(palindromMethodTwo('never odd or even')).toEqual(true);
    expect(palindromMethodTwo('almostomla')).toEqual(false);
    expect(palindromMethodTwo('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(palindromMethodTwo('1 eye for of 1 eye.')).toEqual(false);
    expect(palindromMethodTwo('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
});

test('palindrom using method 3', () => {
    expect(palindromMethodThree('appa')).toEqual(true);
    expect(palindromMethodThree('not a palindrome')).toEqual(false);
    expect(palindromMethodThree('A man, a plan, a canal. Panama')).toEqual(true);
    expect(palindromMethodThree('never odd or even')).toEqual(true);
    expect(palindromMethodThree('almostomla')).toEqual(false);
    expect(palindromMethodThree('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(palindromMethodThree('1 eye for of 1 eye.')).toEqual(false);
    expect(palindromMethodThree('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
});

test('palindrom using method 4', () => {
    expect(palindromMethodForth('appa')).toEqual(true);
    expect(palindromMethodForth('not a palindrome')).toEqual(false);
    expect(palindromMethodForth('A man, a plan, a canal. Panama')).toEqual(true);
    expect(palindromMethodForth('never odd or even')).toEqual(true);
    expect(palindromMethodForth('almostomla')).toEqual(false);
    expect(palindromMethodForth('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(palindromMethodForth('1 eye for of 1 eye.')).toEqual(false);
    expect(palindromMethodForth('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
});

test('palindrom using method 5', () => {
    expect(palindromMethodFifth('appa')).toEqual(true);
    expect(palindromMethodFifth('not a palindrome')).toEqual(false);
    expect(palindromMethodFifth('A man, a plan, a canal. Panama')).toEqual(true);
    expect(palindromMethodFifth('never odd or even')).toEqual(true);
    expect(palindromMethodFifth('almostomla')).toEqual(false);
    expect(palindromMethodFifth('My age is 0, 0 si ega ym.')).toEqual(true);
    expect(palindromMethodFifth('1 eye for of 1 eye.')).toEqual(false);
    expect(palindromMethodFifth('0_0  - - (: /-\ :) - 0–0')).toEqual(true);
});

