var findDuplicate = function(paths) {
  let map = {};
  for (let i = 0; i < paths.length; i++) {
    const arr = paths[i].split(' ');

    let j = 1;
    while (j < arr.length) {
      const path = arr[j];
      console.log(path);
      const content = path.slice(path.lastIndexOf('(') + 1, path.length - 1);
      const name = path.slice(0, path.lastIndexOf('('));
      if (map[content] !== undefined) {
        map[content].push(`${arr[0]}/${name}`);
      } else {
        map[content] = [];
        map[content].push(`${arr[0]}/${name}`);
      }
      j++;
    }
  }

  let res = [];
  for (var content in map) {
    if (map[content].length > 1) {
      res.push(map[content]);
    }
  }
  return res;
};

console.log(
  findDuplicate([
    'root/a 1.txt(abcd) 2.txt(efgh)',
    'root/c 3.txt(abcd)',
    'root/c/d 4.txt(efgh)',
    'root 4.txt(efgh)'
  ])
);
console.log(
  findDuplicate([
    'root/a 1.txt(abcd) 2.txt(efgh)',
    'root/c 3.txt(abcd)',
    'root/c/d 4.txt(efgh)'
  ])
);
