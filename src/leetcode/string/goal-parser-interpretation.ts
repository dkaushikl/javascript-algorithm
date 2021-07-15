// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

function interpret(command) {
  let result = '';

  for (let i = 0; i < command.length; i++) {
    if (command[i] + command[i + 1] === '()') {
      result += 'o';
      i += 1;
    } else if (
      command[i] + command[i + 1] + command[i + 2] + command[i + 3] ===
      '(al)'
    ) {
      result += 'al';
      i += 3;
    } else {
      result += command[i];
    }
  }

  return result;
}

function interpret2(command) {
  return command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o');
}

// interpret2('G()(al)')
// interpret('G()()()()(al)')
// interpret('(al)G(al)()()G')
