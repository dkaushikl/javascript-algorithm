// There is a special keyboard with all keys in a single row.

// You have given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i – j|.

// You want to type a string word. Write a program to calculate how much time it takes to type it with one finger.

// Input :- Keyboard = "abcdefghijklmnopqrstuvwxyz", Word = "cba"
// Output :- 4
// Input :- Keyboard = "pqrstuvwxyzabcdefghijklmno", Word = "hello"
// Output :- 31

function calculateTime(keyboard, word) {
  let objKeyboard = {};

  for (let i = 0; i < keyboard.length; i++) objKeyboard[keyboard[i]] = i;

  let result = 0;
  let oldValue = 0;

  for (let i = 0; i < word.length; i++) {
    result += Math.abs(objKeyboard[word[i]] - oldValue);
    oldValue = objKeyboard[word[i]];
  }

  return result;
}

calculateTime('abcdefghijklmnopqrstuvwxyz', 'cba');
calculateTime('pqrstuvwxyzabcdefghijklmno', 'hello');
