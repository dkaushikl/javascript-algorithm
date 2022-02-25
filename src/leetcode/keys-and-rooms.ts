const canVisitAllRooms = rooms => {
  const dfs = (i, visited, isVisit = false) => {
    if (!isVisit) visited[i] = true;

    for (let k = 0; k < rooms[i].length; k++) {
      if (!visited[rooms[i][k]] && i !== rooms[i][k]) {
        dfs(rooms[i][k], visited, false);
      }
    }
  };

  const d = new Array(rooms.length).fill(false);
  d[0] = true;
  dfs(0, d, true);

  for (const item of d) {
    if (!item) return false;
  }

  return true;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
console.log(
  canVisitAllRooms([[4], [3], [], [2, 5, 7], [1], [], [8, 9], [], [], [6]])
);
