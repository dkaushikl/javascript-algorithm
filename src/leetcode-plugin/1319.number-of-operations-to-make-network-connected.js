/*
 * @lc app=leetcode id=1319 lang=javascript
 *
 * [1319] Number of Operations to Make Network Connected
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  let edges = connections.length;
  if (edges < n - 1) return -1;
  let g = [];
  for (let i = 0; i < n; i++) g[i] = [];
  for (let i = 0; i < edges; i++) {
    g[connections[i][0]].push(connections[i][1]);
    g[connections[i][1]].push(connections[i][0]);
  }
  let v = Array(n).fill(0),
    c = 0;

  function dfs(i, con, v) {
    v[i] = 1;
    for (let x of con[i]) {
      if (!v[x]) dfs(x, con, v);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!v[i]) {
      c++;
      dfs(i, g, v);
    }
  }

  return c - 1;
};
// @lc code=end

console.log(
  makeConnected(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3]
  ])
);

// console.log(makeConnected(8, [[0,1],[0,2],[0,3],[0,4],[3,4],[2,4],[1,4]]));
console.log(
  makeConnected(8, [
    [0, 7],
    [1, 2],
    [3, 4],
    [5, 6]
  ])
);
