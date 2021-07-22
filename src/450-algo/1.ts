const reverseArr = (args: number[]) => {
  let result: number[] = [];
  for (let i = args.length - 1; i >= 0; i--) result.push(args[i]);
  return result;
};

const reverseArrByWhile = (args: number[]) => {
  let start = 0;
  let end = args.length - 1;

  while (start < end) {
    let temp = args[start];
    args[start] = args[end];
    args[end] = temp;

    start += 1;
    end -= 1;
  }
  return args;
};

const reverseArrByRecursion = (
  args: number[],
  i: number = args.length - 1,
  result: number[] = []
) =>
  i < 0 ? result : reverseArrByRecursion(args, i - 1, [...result, args[i]]);

const reverseArrByRecursionSwap = (
  args: number[],
  start: number = 0,
  end: number = args.length - 1
) => {
  [args[end], args[start]] = [args[start], args[end]];
  return start >= end
    ? args
    : reverseArrByRecursionSwap(args, start + 1, end - 1);
};

console.log(reverseArr([1, 2, 3, 4, 5, 6]));
console.log(reverseArrByWhile([1, 2, 3, 4, 5, 6]));
console.log(reverseArrByRecursion([1, 2, 3, 4, 5, 6]));
console.log(reverseArrByRecursionSwap([1, 2, 3, 4, 5, 6]));
