let validPath = (n, edges, start, end) => {
  const adjacencyList = {};

  for (const item of edges) {
    if (!adjacencyList[item[0]]) {
      adjacencyList[item[0]] = [];
    }

    adjacencyList[item[0]].push(item[1]);

    if (!adjacencyList[item[1]]) {
      adjacencyList[item[1]] = [];
    }

    adjacencyList[item[1]].push(item[0]);
  }

  const visited = new Array(n).fill(false);

  const dfs = vertex => {
    if (vertex === end) return true;

    if (adjacencyList[vertex] && adjacencyList[vertex].length > 0) {
      for (const neighbor of adjacencyList[vertex])
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          if (dfs(neighbor)) return true;
        }
    }

    return false;
  };

  visited[start] = true;
  return dfs(start);
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0]
    ],
    0,
    2
  )
);

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3]
    ],
    0,
    5
  )
);

console.log(
  validPath(
    10,
    [
      [0, 7],
      [0, 8],
      [6, 1],
      [2, 0],
      [0, 4],
      [5, 8],
      [4, 7],
      [1, 3],
      [3, 5],
      [6, 5]
    ],
    7,
    5
  )
);
