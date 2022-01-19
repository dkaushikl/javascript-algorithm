class Node {
  data: number | string;
  left: Node;
  right: Node;

  constructor(data: string | number, left?: null, right?: null) {
    this.data = data;
    (this.left = left || null), (this.right = right || null);
  }
}

export class Tree {
  root: any;

  constructor() {
    this.root = null;
  }

  insert = (val: number) => {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > val) {
          if (!currentNode.left) {
            currentNode.left = new Node(val);
            break;
          } else {
            currentNode = currentNode.left;
          }
        }

        if (currentNode.data < val) {
          if (!currentNode.right) {
            currentNode.right = new Node(val);
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this.root;
  };

  insertRecursive = (val: number, root = this.root) => {
    const newNode = new Node(val);
    let curr = this.root;
    const traverse = (root: Node) => {
      if (val > root.data) {
        if (root.right) {
          curr = root.right;
          traverse(curr);
        } else {
          curr.right = newNode;
        }
      } else {
        if (root.left) {
          curr = root.left;
          traverse(curr);
        } else {
          curr.left = newNode;
        }
      }
    };

    traverse(curr);
    return this.root;
  };

  preOrder = () => {
    const arr = [];
    const traverse = (root: { data: any; left: any; right: any }) => {
      if (root) {
        arr.push(root.data);

        if (root.left) {
          traverse(root.left);
        }

        if (root.right) {
          traverse(root.right);
        }
      }
    };

    traverse(this.root);
    return arr;
  };

  inOrder = () => {
    const arr = [];
    const traverse = (root: { left: any; data: any; right: any }) => {
      if (root) {
        if (root.left) {
          traverse(root.left);
        }
        arr.push(root.data);

        if (root.right) {
          traverse(root.right);
        }
      }
    };

    traverse(this.root);
    return arr;
  };
  postOrder = () => {
    const arr = [];
    const traverse = (root: { left: any; right: any; data: any }) => {
      if (root.left) {
        traverse(root.left);
      }

      if (root.right) {
        traverse(root.right);
      }
      arr.push(root.data);
    };

    traverse(this.root);
    return arr;
  };
  preOrderIterative = () => {
    const arr = [];
    const queue = [];
    let curr = this.root;

    while (curr || queue.length > 0) {
      if (curr) {
        arr.push(curr.data);
        queue.push(curr);
        curr = curr.left;
      } else {
        const root = queue.pop();
        if (root.right) {
          curr = root.right;
        }
      }
    }
    return arr;
  };

  inOrderIterative = () => {
    const arr = [];
    const queue = [];
    let curr = this.root;

    while (curr || queue.length > 0) {
      if (curr) {
        queue.push(curr);
        curr = curr.left;
      } else {
        const root = queue.pop();
        arr.push(root.data);
        if (root.right) {
          curr = root.right;
        }
      }
    }
    return arr;
  };

  postOrderIterative = () => {
    const s1 = [this.root],
      s2 = [];

    while (s1.length > 0) {
      const temp = s1.pop();
      console.log(temp.data);
      s2.push(temp.data);
      if (temp.left) s1.push(temp.left);
      if (temp.right) s1.push(temp.right);
    }

    return s2.reverse();
  };

  levelOrderIterative = () => {
    const arr = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const curr = queue.shift();

      if (curr) {
        arr.push(curr.data);
      }

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }

    return arr;
  };

  buildTree = (preorder: string | any[], inorder: string | any[]) => {
    if (!preorder.length) return null;

    const index = inorder.indexOf(preorder[0]);
    const left = this.buildTree(
      inorder.slice(0, index),
      inorder.slice(0, index)
    );
    const right = this.buildTree(
      preorder.slice(index + 1),
      inorder.slice(index + 1)
    );

    return new Node(preorder[0], left, right);
  };

  heightTree = () => {
    if (!this.root) return 0;
    let max = Number.MIN_SAFE_INTEGER;

    const traverse = (root: { left: any; right: any }, height: number) => {
      if (!root) return;
      max = Math.max(height, max);

      traverse(root.left, height + 1);
      traverse(root.right, height + 1);
    };

    traverse(this.root, 1);
    console.log(max);
    return max;
  };

  totalNodes = () => {
    let sum = 0;
    const traverse = (root: { left: any; right: any }) => {
      if (!root) return;

      sum += 1;
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    };

    traverse(this.root);
    console.log(sum);
    return sum;
  };

  delete = (key, root = this.root) => {
    if (!root) {
      return null;
    }
    if (key < root.data) {
      root.left = this.delete(key, root.left);
      return root;
    } else if (key > root.data) {
      root.right = this.delete(key, root.right);
      return root;
    } else {
      if (!root.left && !root.right) {
        root = null;
        return root;
      }

      if (!root.left) return root.right;
      if (!root.right) return root.left;

      let currNode = root.right;
      while (currNode.left) {
        currNode = currNode.left;
      }

      root.data = currNode.data;
      root.right = this.delete(currNode.data, root.right);
      return root;
    }
  };

  minVal = (root = this.root, min = Number.MAX_SAFE_INTEGER, level = 0) => {
    if (!root) return level === 0 ? 0 : min;
    min = Math.min(root.data, min);
    return this.minVal(root.left, min, level + 1);
  };

  maxVal = (root = this.root, max = Number.MIN_SAFE_INTEGER, level = 0) => {
    if (!root) return level === 0 ? 0 : max;
    max = Math.max(root.data, max);
    return this.maxVal(root.left, max, level + 1);
  };

  lookup = (val: number) => {
    const traverse = (root: Node) => {
      if (!root) {
        return false;
      }

      if (root.data === val) {
        return true;
      }

      if (val > root.data) {
        return traverse(root.right);
      }

      if (val < root.data) {
        return traverse(root.left);
      }
    };

    const result = traverse(this.root);
    return result || false;
  };

  averageOfLevels = () => {
    const arr = [];

    const traverse = (root, level) => {
      if (!root) return;

      //  console.log(arr.length);
      if (arr.length > level) {
        arr[level] = [arr[level][0] + root.data, arr[level][1] + 1];
      } else {
        arr.push([root.data, 1]);
      }

      if (root.left) traverse(root.left, level + 1);

      if (root.right) traverse(root.right, level + 1);
    };

    traverse(this.root, 0);

    return arr.map(x => (x[0] / x[1]).toFixed(5));
  };

  sortedArrayToBST = nums => {
    const traverse = arr => {
      if (!arr.length) return null;
      const mid = Math.floor(arr.length / 2);
      const root = new Node(arr[mid]);
      root.left = traverse(arr.slice(0, mid + 1));
      root.right = traverse(arr.slice(mid + 1));
      return root;
    };

    return traverse(nums);
  };

  depth = root => {
    if (!root) return 0;
    return Math.max(this.depth(root.left), this.depth(root.right)) + 1;
  };

  isBalanced = (root = this.root) => {
    if (!root) return true;

    const left = this.depth(root.left);
    const right = this.depth(root.right);

    return (
      Math.abs(left - right) <= 1 &&
      this.isBalanced(root.left) &&
      this.isBalanced(root.right)
    );
  };
}

const tree = new Tree();
console.log(tree.insert(8));
console.log(tree.insert(3));
console.log(tree.insert(10));
console.log(tree.insert(1));
console.log(tree.insertRecursive(6));
console.log(tree.insertRecursive(14));
console.log(tree.insertRecursive(4));
console.log(tree.insertRecursive(7));
console.log(tree.insertRecursive(13));
console.log(tree.lookup(8));

// https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png
console.log(JSON.stringify(tree.root));

// Recursive Traversal

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());

// Iterative Traversal
console.log(tree.preOrderIterative());
console.log(tree.inOrderIterative());
console.log(tree.postOrderIterative());
console.log(tree.levelOrderIterative());

// Construct Tree
console.log(tree.buildTree([1, 2, 3], [3, 2, 1]));
console.log(tree.heightTree());
console.log(tree.totalNodes());

console.log(JSON.stringify(tree.root));
console.log(JSON.stringify(tree.delete(3)));
console.log(JSON.stringify(tree.root));

console.log(tree.minVal());
console.log(tree.maxVal());
console.log(tree.averageOfLevels());
