const BuildArray = (target: number[], n: number) => {
  if (target.length === 0) return target;

  const result: string[] = [];
  let j = 0;

  for (let i = 1; i <= n; i++) {
    if (!target.includes(i)) result.push('push', 'pop');
    else {
      j++;
      result.push('push');
    }

    if (j === target.length) break;
  }

  return result;
};

// BuildArray([1, 3], 3);
// BuildArray([1, 2, 3], 3);
// BuildArray([1, 2], 4);
BuildArray([2, 3, 4], 4);
