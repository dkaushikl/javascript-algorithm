const kthSmallestNumber = (args: number[], k: number) => {
  args.sort((a, b) => a - b);
  return args[k - 1];
};

console.log(kthSmallestNumber([7, 10, 4, 3, 20, 15], 3));
console.log(kthSmallestNumber([7, 10, 4, 20, 15], 4));
