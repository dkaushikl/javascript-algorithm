function smalledMultiple(n) {
  let number = 0;
  const twentyArray = Array.from(Array(n).keys());

  for (let index = 0; index <= Number.MAX_SAFE_INTEGER; index += 1) {
    if (Number(index) === 0) {
      continue;
    }

    const test = twentyArray.filter(x => index % x === 0);

    if (test.length === 19) {
      number = index;
      break;
    }
  }

  return number;
}

smalledMultiple(20);
