class UnionFind {
  parents = [];

  /**
   * need to create array to set value in array by given length
   * @param  {number} size
   */
  constructor(size: number) {
    this.parents = new Array(size).fill(0).map((_, i) => i);
  }

  /**
   * it is just simple find method to check who is parent for given node
   * just need to check what is the parents for given index. this method is called quick-find
   * o(1)
   * @param  {number} i
   * @returns any
   */
  quickFind = (i: number): any => {
    return this.parents[i];
  };

  /**
   * this is quick-union method. time complexity is o(n), nonetheless it is optimized algo compare to quick-find.
   * it's optimized algorithm reason behind that it set directly parent root to given vertex.
   */
  quickUnion = (i: number): any => {
    // this technique is faster than quickfind tech but it is less faster than pass-compression algorithm.
    // if (i === this.parents[i]) return i;
    // while ( i !== this.parents[i])
    //   i = this.parents[i];
    // return i;

    // this solution is more optimised then above solution because it sets of values while finding parent node value
    // it can be implemented in iterative way too
    // this technique is called as path-compression algorithm.
    if (i === this.parents[i]) {
      return i;
    }
    return (this.parents[i] = this.quickUnion(this.parents[i]));
  };

  /**
   * if given u and v are not in same group then we traverse entire array and eventually will update parent of v by parent of u
   * O(n)
   * @param  {number} u
   * @param  {number} v
   */
  union = (u: number, v: number) => {
    const rootX = this.quickFind(u);
    const rootY = this.quickFind(v);

    if (rootX !== rootY) {
      for (let i = 0; i < this.parents.length; i++) {
        if (this.parents[i] === rootY) {
          this.parents[i] = rootX;
        }
      }
    }
  };

  /**
   * just need to set value of v in root parent.
   * O(n)
   * @param  {number} u
   * @param  {number} v
   */
  unionForQuick = (u: number, v: number) => {
    const rootX = this.quickUnion(u);
    const rootY = this.quickUnion(v);

    if (rootX !== rootY) {
      this.parents[v] = rootX;
    }
  };

  connected = (x, y) => {
    return this.quickFind(x) === this.quickFind(y);
  };
}

const uf = new UnionFind(10);
// 1-2-5-6-7 3-8-9 4

uf.unionForQuick(1, 2);
uf.unionForQuick(2, 5);
uf.unionForQuick(5, 6);
uf.unionForQuick(6, 7);
uf.unionForQuick(3, 8);
uf.unionForQuick(8, 9);

console.log(uf.connected(1, 5));
console.log(uf.connected(5, 7));
console.log(uf.connected(4, 9));
uf.unionForQuick(4, 9);
console.log(uf.connected(4, 9));
