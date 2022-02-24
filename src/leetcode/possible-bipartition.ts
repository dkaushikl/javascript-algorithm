const possibleBipartition = (N, dislikes) => {
  // Define hashmap for adjacency list
  const graph = new Map();

  // Build vertices/edges bidirectionally
  for (const [v, e] of dislikes) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    if (graph.has(e)) {
      graph.get(e).push(v);
    } else {
      graph.set(e, [v]);
    }
  }

  console.log(graph.get(1));

  const uf = new UnionFind(N);

  for (let vertex = 0; vertex < N; vertex++) {
    const neighbours = graph.get(vertex);
    if (!neighbours || neighbours.length === 0) continue;

    const parentNeighbour = neighbours.shift();

    // validate and unite neighbour
    for (const neighbour of neighbours) {
      if (uf.find(vertex) === uf.find(neighbour)) return false;
      uf.union(parentNeighbour, neighbour);
    }
  }

  // Default case: success
  return true;
};

// Union find algorithm is useful when you want to find whether given graph has cycle or not. It has two kind of function. 1 is find and another one is union.
// let's start with union

// in union, we pass down parent vertices, and current vertices. we set current vertices value earlier when we initialize current vertices but we need to update parent vertices if it belongs to other vertices.

// first function find useful when you want to set parent node for perticular node, at that time to find parent node (root) node, at that time you called find method with current node, and in side which you search in parent node that

class UnionFind {
  root = [];
  rank = [];

  constructor(size) {
    this.root = new Array(size).map((_, i) => i);
    this.rank = new Array(size).map((_, i) => 1);
  }

  find = x => {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x]);
    }

    return this.root[x];
  };

  union = (x, y) => {
    this.root[this.find(x)] = this.find(y);
  };
}

let dislikes = [
  [1, 2],
  [1, 3],
  [2, 4]
];
console.log(possibleBipartition(4, dislikes));
