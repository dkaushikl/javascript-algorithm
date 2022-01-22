const findItinerary = tickets => {
  const adjList = {};

  for (const item of tickets) {
    if (!adjList[item[0]]) {
      adjList[item[0]] = [];
    }
    adjList[item[0]].push(item[1]);

    if (!adjList[item[1]]) {
      adjList[item[1]] = [];
    }
  }

  // tslint:disable-next-line: forin
  for (const item in adjList) {
    adjList[item].sort();
  }

  console.log(adjList);

  const visited = {};
  const dfs = (vertex, result) => {
    if (adjList[vertex] && adjList[vertex].length > 0) {
      for (const neighbor of adjList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          dfs(neighbor, result);
        }
      }
    }

    result.push(vertex);
    return result;
  };

  return dfs('JFK', []).reverse();
};

// console.log(findItinerary([['JFK', 'KUL'], ['JFK', 'NRT'], ['NRT', 'JFK']]));
console.log(
  findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO']
  ])
);
// console.log(findItinerary([['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']]));
