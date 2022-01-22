class Graph {
  vertices = [];
  adjacent = {};
  edges = 0;
  constructor() {
    this.vertices = [];
    this.adjacent = {};
    this.edges = 0;
  }

  addVertex = v => {
    this.vertices.push(v);
    this.adjacent[v] = [];
  };

  addEdge = (v, e) => {
    this.adjacent[v].push(e);
    // this.adjacent[e].push(v);
    this.edges++;
  };

  /**
   * we used bfs here to find whether given goal is present or not.
   *
   * @param  {} goal
   * @param  {} root=this.vertices[0]
   */
  bfs = (root = this.vertices[0]) => {
    const adj = this.adjacent;
    const queue = [root];
    const visited = { root: true };
    const result = [];
    while (queue.length) {
      const v = queue.shift();
      result.push(v);
      for (let i = 0; i < adj[v].length; i++) {
        if (!visited[adj[v][i]]) {
          visited[adj[v][i]] = true;
          queue.push(adj[v][i]);
        }
      }
    }
    return result;
  };

  /**
   * we found path from started root to given target route. for that we used bfs method
   * we will use two variable to found shortest path edges and parents
   * edges stores the level of node to reach particular node.
   * parents store which is the parents of particular node like in our case 1 is parents of node 2 and 3.
   * @param  {} goal
   * @param  {} root=this.vertices[0]
   */
  bfspath = (target, root = this.vertices[0]) => {
    const adj = this.adjacent;
    const queue = [root];

    const visited = new Array(this.vertices.length).fill(false);
    visited[root] = true;

    const edges = { [root]: null };
    const parents = { [root]: root };

    // build path until we find perfect predecessors
    const buildPath = (goal, parents) => {
      const stack = [goal];
      const arr = [];

      while (stack.length > 0) {
        const pop = stack.pop();
        arr.push(pop);

        if (pop !== parents[pop]) {
          stack.push(parents[pop]);
        }
      }

      return arr.reverse().join('-');
    };

    // traverse every vertices and edges
    while (queue.length) {
      const v = queue.shift();
      for (let i = 0; i < adj[v].length; i++) {
        const nextAdj = adj[v][i];

        if (!visited[nextAdj]) {
          parents[nextAdj] = v;
          edges[nextAdj] = edges[v] + 1;
          visited[nextAdj] = true;
          queue.push(nextAdj);
        }
      }
    }

    return {
      distance: target,
      path: buildPath(target, parents)
    };
  };

  /**
   * @param  {} v=this.vertices[0]
   * @param  {true}} visited={[v]
   */
  dfs = (v = this.vertices[0], visited = {}, result = []) => {
    const adj = this.adjacent;
    visited[v] = true;
    result.push(v);

    for (let i = 0; i < adj[v].length; i++) {
      const w = adj[v][i];
      if (!visited[w]) {
        this.dfs(w, visited, result);
      }
    }

    return result;
  };

  /**
   * traverse right child to left child
   * DFS - [1, 2, 4, 6, 7, 3, 5]
   * TPS - [1, 3, 5, 2, 4, 6, 7]
   * Looking results, it seems right node value serve earlier than left node.
   * @param  {} v=this.vertices[0]
   * @param  {} visited=[]
   * @param  {} stack=[]
   */
  topoSort(v = this.vertices[0], visited = [], result = []) {
    const adj = this.adjacent;
    visited[v] = true;

    for (let i = 0; i < adj[v].length; i++) {
      const w = adj[v][i];

      if (!visited[w]) {
        this.topoSort(w, visited, result);
      }
    }

    result.unshift(v);
    return result;
  }

  // graph is connected if you can reach every node from starting point
  // used dfs to check graph connected or not.
  // crated visited object to track every node whether every node has been visited or not.
  isConnected = (vertex = this.vertices[0]) => {
    const visited = new Array(this.vertices.length).fill(false);

    const dfs = v => {
      visited[v] = true;

      const connections = this.adjacent[v];
      if (connections && connections.length > 0) {
        for (let i = 0; i < connections.length; i++) {
          if (!visited[connections[i]]) dfs(connections[i]);
        }
      }
    };

    dfs(vertex);

    for (const item in visited) {
      if (!visited[item]) return false;
    }
    return true;
  };

  isBipartite = () => {
    const queue = [this.vertices[0]];
    const colors = new Array(this.vertices.length).fill(-1);
    colors[0] = 0;

    while (queue.length > 0) {
      const curr = queue.shift();
      const neighbours = this.adjacent[curr];

      for (const neighbour of neighbours) {
        if (colors[neighbour] === colors[curr]) {
          return false;
        }

        if (colors[neighbour] === -1) {
          colors[neighbour] = 1 - colors[curr];
          queue.push(neighbour);
        }
      }
    }

    return true;
  };

  hasCycle = () => {
    const dfs = (vertex, visited) => {
      if (visited[vertex]) return true;

      const neighbours = this.adjacent[vertex];
      for (const neighbour of neighbours) {
        visited[vertex] = true;
        return dfs(neighbour, visited);
      }

      visited[vertex] = false;
      return false;
    };

    for (let i = 0; i < this.vertices.length; i++) {
      const visited = new Array(this.vertices.length).fill(false);
      if (dfs(i, visited)) {
        return true;
      }
    }

    return false;
  };
}

/*
   1 ------- 2
   |  \  /   |
   |  /   \  |
   3 ------- 4   7
   |         |  /
   |         | /
   5 ------- 6
*/

const g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(3, 5);

// Bi-partite - true, connected - false
// g.addEdge(1, 3);
// g.addEdge(0, 2);
// g.addEdge(1, 3);
// g.addEdge(0, 2);

console.log(g.vertices);
console.log(g.edges);
console.log(g.adjacent);

console.log(g.bfs());
console.log(g.bfspath(5));
console.log(g.dfs());
console.log(g.topoSort());
console.log(g.isConnected());
console.log(g.isBipartite());
console.log(g.hasCycle());
