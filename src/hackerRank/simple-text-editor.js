function processData(input) {
  let ops = [];
  for (let i = 0; i < input.length; i++) {
    if (data[i][0] === '1') {
      const lastAddedText = ops[ops.length - 1];
      ops.push(lastAddedText ? lastAddedText + data[i][1] : data[i][1]);
    } else if (data[i][0] === '2') {
      const lastAddedText = ops[ops.length - 1];
      const updatedText = lastAddedText.slice(
        0,
        lastAddedText.length - data[i][1]
      );
      ops.push(updatedText);
    } else if (data[i][0] === '3') {
      const lastAddedText = ops[ops.length - 1];
      console.log(lastAddedText[data[i][1] - 1]);
    } else {
      ops.pop();
    }
  }
}

const data = [
  ['1', 'abc'],
  ['1', 'def'],
  ['3', '5'],
  ['2', '3'],
  ['1', 'xy'],
  ['3', '2'],
  ['4'],
  ['4'],
  ['3', '1']
];
console.log(processData(data));
