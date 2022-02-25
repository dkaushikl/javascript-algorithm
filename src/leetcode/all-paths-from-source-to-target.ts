const allPathsSourceTarget = graph => {
  const adjacencyList = {};

  let i = 0;
  for (const item of graph) {
    adjacencyList[i] = [];
    for (const item2 of item) {
      adjacencyList[i].push(item2);
    }
    i++;
  }

  const dfs = (vertex, end, stack, result) => {
    if (end === vertex) {
      stack.push(end);
      result.push(JSON.parse(JSON.stringify(stack)));
      stack.pop();
      return result;
    }

    stack.push(vertex);
    if (adjacencyList[vertex] && adjacencyList[vertex].length > 0) {
      for (const item of adjacencyList[vertex]) {
        dfs(item, end, stack, result);
      }
    }
    stack.pop();
    return result;
  };

  return dfs(0, graph.length - 1, [], []);
};

let graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPathsSourceTarget(graph));

let graph2 = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph2));

const allPathsSourceTargetBFS = graph => {
  const adjacencyList = {};

  // convert given graph into list to traverse queue wise
  // time complexity - O(n)2
  let i = 0;
  for (const item of graph) {
    adjacencyList[i] = [];
    for (const item2 of item) {
      adjacencyList[i].push(item2);
    }
    i++;
  }

  // start with 0 vertex
  const queue: any = [[0, []]];
  const end = graph.length - 1;

  // end result will be stored in finalresult.
  const finalResult = [];
  while (queue.length > 0) {
    // need to pull out first inserted records from queue
    const [vertex, path] = queue.shift();

    // insert every visited vertex into path. so that we carry out past path too.
    path.push(vertex);

    // if vertex is match with given end then insert it into final result
    if (vertex === end) {
      finalResult.push(path);
      continue;
    }

    // traverse neighbors and add it into queue to find the end root.
    if (adjacencyList[vertex] && adjacencyList[vertex].length > 0) {
      for (const item of adjacencyList[vertex]) {
        // we have to use splice operator here. do not know why it is not working if we use directly path variable
        // however i guess if we use path variable directly then push enter that value directly into current array. while splice operator create new array
        queue.push([item, [...path]]);
      }
    }
  }

  return finalResult;
};

console.log(allPathsSourceTargetBFS(graph));
// console.log(allPathsSourceTargetBFS(graph2));
