const eventualSafeNodes = (graph: string | any[]) => {
  const dfs = (curr: number, visited: any[]) => {
    if (visited[curr] === 1) return false;
    if (visited[curr] === 2) return true;

    if (graph[curr].length === 0) return true;

    visited[curr] = 1;

    for (const neighbour of graph[curr])
      if (dfs(neighbour, visited) === false) return false;

    visited[curr] = 2;
    return true;
  };

  const result = [];
  const visited = new Array(graph.length).fill(-1);
  for (let i = 0; i < graph.length; i++) {
    if (dfs(i, visited)) {
      result.push(i);
    }
  }
  return result;
};

console.log(eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]));
console.log(eventualSafeNodes([[], [0, 2, 3, 4], [3], [4], []]));
console.log(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]));
