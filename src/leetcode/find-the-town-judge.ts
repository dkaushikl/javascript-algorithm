const findJudge = (n: number, trust: string | any[]) => {
  if (trust.length <= 0 && n > 1) return -1;

  const adjacencyList = {};

  for (const item of trust) {
    if (!adjacencyList[Number(item[0])]) adjacencyList[Number(item[0])] = [];

    adjacencyList[Number(item[0])].push(Number(item[1]));
  }

  const dfs = (i: number, N: number, visited: any) => {
    for (let k = 1; k <= N; k++)
      if (adjacencyList[k] && adjacencyList[k].includes(i))
        visited[k - 1] = true;

    for (let k = 1; k <= visited.length; k++) {
      if ((i !== k && visited[k - 1]) || (i === k && !visited[k - 1])) continue;

      return false;
    }
    return true;
  };

  for (let i = 1; i <= n; i++)
    if (!adjacencyList[i]) {
      if (dfs(i, n, new Array(n).fill(false))) return i;
    }

  return -1;
};

console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3]
  ])
);
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1]
  ])
);
console.log(findJudge(1, []));
console.log(findJudge(2, []));
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3]
  ])
);
