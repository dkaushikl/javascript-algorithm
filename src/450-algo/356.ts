class Graph {
  root: object;

  constructor() {
    this.root = {};
  }

  addNode(node) {
    this.root[node] = [];
  }

  addVertex(source, destination) {
    if (!this.root[source] || !this.root[destination]) return false;

    if (this.root[source] && !this.root[source].includes(destination))
      this.root[source].push(destination);

    // if (this.root[destination] && !this.root[destination].includes(source))
    //     this.root[destination].push(source);
  }

  print() {
    let concatGraph = '';
    for (const item in this.root) {
      for (const map of this.root[item]) {
        concatGraph += `${item} -> ${map}, `;
      }
      concatGraph += '\n';
    }
    return concatGraph;
  }

  bfs(start: number) {
    const queue = [start];
    const result = [];
    const visited = {};

    let currentVertex: number;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.root[currentVertex].forEach((neighbor: number) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  dfs(start: number) {
    const stack = [start];
    const result = [];
    const visited = { [start]: true };

    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      for (const neighbor of this.root[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }

    return result;
  }

  _detectCycleUtill(vertex, visited) {
    if (!visited[vertex]) {
      visited[vertex] = true;

      for (const currentNode of this.root[vertex]) {
        if (
          !visited[currentNode] &&
          this._detectCycleUtill(currentNode, visited)
        ) {
          return true;
        }
      }
    }

    // recStack[vertex] = false;
    return false;
  }

  detectCycle() {
    const nodes = Object.keys(this.root);
    const visited = {};

    for (const item of nodes) {
      if (this._detectCycleUtill(item, visited)) return 'there is a cycle';
    }

    return 'No Cycle!!';
  }
}

const graph = new Graph();
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);

graph.addVertex(0, 1);
graph.addVertex(2, 1);
graph.addVertex(2, 3);
graph.addVertex(3, 4);
graph.addVertex(4, 0);
graph.addVertex(4, 2);

console.log(graph.print());
console.log(graph.root);
console.log(graph.bfs(0));
console.log(graph.dfs(0));
console.log(graph.detectCycle());

// {
//     0: [1, 2, 3],
//     1: [0],
//     2: [0],
//     3: [0],
//     4: [2],
// }
