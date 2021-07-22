// linear brute force way
const getMinMax = (args: number[]) => {
  if (args.length === 0) return [];
  if (args.length === 1) return [args[0], args[0]];

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) max = args[i];

    if (args[i] < min) min = args[i];
  }
  return [min, max];
};

// recursive way
const getMinMaxByRecursive = (
  args: number[],
  min: number = Number.MAX_SAFE_INTEGER,
  max: number = Number.MIN_SAFE_INTEGER
) => {
  if (args.length === 0) return [];
  if (args.length === 1)
    return [args[0] < min ? args[0] : min, args[0] > max ? args[0] : max];

  const number: number | undefined = args.pop();
  return getMinMaxByRecursive(
    args,
    number && number < min ? number : min,
    number && number > max ? number : max
  );
};

// tournament way
// const getMinMaxByTournament = (args: number[]) => {
//     if (args.length === 0) return [];
//     if (args.length === 1) return [args[0], args[0]];
//     if (args.length === 2) return [args[0] > args[1] ? args[1] : args[0], args[0] > args[1] ? args[0] : args[1]];

//     let min = Number.MAX_SAFE_INTEGER;
//     let max = Number.MIN_SAFE_INTEGER;

// }

// console.log(getMinMax([1000, 11, 445, 1, 330, 3000]));
// console.log(getMinMax([1000]));
// console.log(getMinMaxByRecursive([1000, 11, 445, 1, 330, 3000]));
// console.log(getMinMaxByRecursive([1, 2]));
// console.log(getMinMaxByRecursive([1000]));
// console.log(getMinMaxByRecursive([]));
// console.log(getMinMaxByTournament([1000, 11, 445, 1, 330, 3000]));
// console.log(getMinMaxByTournament([1, 2]));
