const mergeTrees = (s1, s2) => {
  console.log(s1);
  console.log(s2);
};

const root1 = {
  root: {
    left: null,
    right: {
      left: { left: null, right: null, value: 2 },
      right: { left: null, right: null, value: 5 },
      value: 3
    },
    value: 1
  }
};

const root2 = {
  root: {
    left: { left: null, right: null, value: 1 },
    right: {
      left: null,
      right: {
        left: null,
        right: { left: null, right: null, value: 7 },
        value: 4
      },
      value: 3
    },
    value: 2
  }
};

console.log(mergeTrees(root1, root2));
