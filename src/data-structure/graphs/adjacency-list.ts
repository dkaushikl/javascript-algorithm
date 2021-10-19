class Graph {
  adjacencyList = [];
  noOfVertex = 0;

  addVertex = (vertex: number) => {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      this.noOfVertex++;
    }
  };

  addEdge = (vertex1: number, vertex2: number) => {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  };

  removeEdge = (vertex1: number, vertex2: number) => {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v: number) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v: number) => v !== vertex1
    );
  };

  removeVertex = (vertex1: number) => {
    if (this.adjacencyList[vertex1]) {
      for (const item of this.adjacencyList[vertex1]) {
        this.adjacencyList[item] = this.adjacencyList[item].filter(
          (v: number) => v !== vertex1
        );
        this.adjacencyList[vertex1].shift();
      }
      this.noOfVertex--;
    }
  };

  totalVertex = () => {
    return this.noOfVertex;
  };

  printGraph = () => {
    let sum = '';
    // tslint:disable-next-line:forin
    for (const iterator in this.adjacencyList) {
      for (const iterator2 of this.adjacencyList[iterator]) {
        sum += `${iterator} -> ${iterator2}`;
      }
      sum += '\n';
    }
    return sum;
  };

  breadthFirst = (start: number) => {
    const queue = [start];
    const result = [];
    const visited = {};

    let currentVertex: number;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: number) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  };

  depthFirst = (start: number) => {
    const stack = [start];
    const result = [];
    const visited = {};

    let currentVertex: number | number;
    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: number) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  };

  depthFirstRecursive = (start: number) => {
    const result = [];
    const visited = {};

    const dfs = (vertex: number) => {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor: number) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(start);
    return result;
  };
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(0, 1);
graph.addEdge(2, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 0);
graph.addEdge(4, 2);

console.log(graph.totalVertex());
console.log(graph.printGraph());
console.log(graph.adjacencyList);
console.log(graph.breadthFirst(0));
console.log(graph.depthFirst(0));
console.log(graph.depthFirstRecursive(0));

console.log(graph);

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
