const judgeCircle = function(moves) {
  const map = {};

  for (let i = 0; i < moves.length; i++) {
    const char = moves[i];
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  const chars = {
    L: 'R',
    R: 'L',
    U: 'D',
    D: 'U'
  };

  for (const item of Object.keys(map)) {
    if (map[item] !== map[chars[item]]) return false;
  }
  return true;
};

console.log(
  judgeCircle(
    'DRLLDLLRRURURURULLLDDUDLUUUDLLDLDRLDRURDURRLRDLDRDLDDURDUURLLUUURLDRLUULUUDRDRUDURLLRDRRDLDU'
  )
);
