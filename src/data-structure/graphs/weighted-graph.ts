class WeightedGraph {
  adjacencyList = [];

  addVertex = (vertex: string | number) => {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  };

  addEdge(vertex1: string | number, vertex2: string | number, weight: any) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
  }

  Dijkstra = vertex => {};

  printGraph = () => {
    let sum = '';
    // tslint:disable-next-line:forin
    for (const iterator in this.adjacencyList) {
      for (const iterator2 of this.adjacencyList[iterator]) {
        sum += `${iterator} ->  ${iterator2.weight} ->  ${iterator2.node}`;
        sum += '\n';
      }
      sum += '\n';
    }
    return sum;
  };
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');
weightedGraph.addEdge('A', 'B', 1);
weightedGraph.addEdge('B', 'C', 1);
weightedGraph.addEdge('C', 'A', 1);
weightedGraph.addEdge('A', 'D', 1);

weightedGraph.Dijkstra('A');

console.log(weightedGraph.printGraph());
