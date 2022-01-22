let canFinish = (numCourses, prerequisites) => {
  const graph = new Map();
  for (let i = 0; i < prerequisites.length; i++) {
    if (graph.has(prerequisites[i][0])) {
      graph.get(prerequisites[i][0]).push(prerequisites[i][1]);
    } else {
      graph.set(prerequisites[i][0], [prerequisites[i][1]]);
    }

    if (!graph.has(prerequisites[i][1])) {
      graph.set(prerequisites[i][1], []);
    }
  }

  const dfs = (i, visited, recStack) => {
    if (recStack[i]) return false;
    if (visited[i]) return true;

    visited[i] = true;
    recStack[i] = true;

    const nextAdj = graph.get(i);
    if (!nextAdj || nextAdj.length <= 0) return true;

    for (let k = 0; k < nextAdj.length; k++) {
      return dfs(nextAdj[k], visited, recStack);
    }
  };

  const FALSE_ARRAY = new Array(numCourses).fill(false);
  for (let i = 0; i < prerequisites.length; i++) {
    const visited = [...FALSE_ARRAY];
    const recStack = [...FALSE_ARRAY];

    visited[prerequisites[i][0]] = true;
    recStack[prerequisites[i][0]] = true;

    if (!dfs(prerequisites[i][1], visited, recStack)) return false;
  }
  return true;
};

console.log(
  canFinish(4, [
    [2, 0],
    [1, 0],
    [3, 1],
    [3, 2],
    [1, 3]
  ])
);

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2]
  ])
);
