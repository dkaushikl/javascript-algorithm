import { StringMappingType } from 'typescript';

class Graph {
  adjacencyList = [];
  noOfVertex = 0;

  addVertex = (vertex: string) => {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      this.noOfVertex++;
    }
  };

  addEdge = (vertex1: string, vertex2: string) => {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  };

  removeEdge = (vertex1: string, vertex2: string) => {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v: string) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v: string) => v !== vertex1
    );
  };

  removeVertex = (vertex1: string) => {
    if (this.adjacencyList[vertex1]) {
      for (const item of this.adjacencyList[vertex1]) {
        this.adjacencyList[item] = this.adjacencyList[item].filter(
          (v: string) => v !== vertex1
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

  breadthFirst = (start: string) => {
    const queue = [start];
    const result = [];
    const visited = {};

    let currentVertex: string;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: string) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  };

  depthFirst = (start: string) => {
    const stack = [start];
    const result = [];
    const visited = {};

    let currentVertex: string | number;
    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor: string) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  };

  depthFirstRecursive = (start: string) => {
    const result = [];
    const visited = {};

    const dfs = (vertex: string) => {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor: string) => {
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
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

graph.totalVertex();

console.log(graph.printGraph());
console.log(graph.breadthFirst('A'));
console.log(graph.depthFirst('A'));
console.log(graph.depthFirstRecursive('A'));

console.log(graph);

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
