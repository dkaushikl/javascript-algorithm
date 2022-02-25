const lonelyinteger = a => {
  let result = 0;
  for (const char of a) {
    // tslint:disable-next-line: no-bitwise
    result ^= char;
  }
  return result;
};

console.log(lonelyinteger([0, 0, 1, 2, 1]));
