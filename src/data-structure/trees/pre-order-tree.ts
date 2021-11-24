class Node {
  left: any;
  right: any;
  value: number;

  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

export class BinarySearchTree {
  root: any;
  constructor() {
    this.root = null;
  }

  insert = val => {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  };

  preorder = () => {
    if (!this.root) return [];
    const result = [];

    const traverse = (root: Node) => {
      result.push(root.value);
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    };

    traverse(this.root);
    return result;
  };

  preorderStack = () => {
    if (!this.root) {
      return [];
    }

    const stack = [this.root];
    const result = [];

    while (stack.length > 0) {
      let current = stack.pop();
      result.push(current.value);

      console.log(JSON.stringify(current));

      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
      }
    }

    return result;
  };

  inorder = () => {
    if (!this.root) {
      return [];
    }

    const result = [];

    const traverse = (root: Node) => {
      if (root.left) traverse(root.left);
      result.push(root.value);
      if (root.right) traverse(root.right);
    };

    traverse(this.root);
    return result;
  };

  inorderStack = () => {
    let result = [];
    let stack = [];
    let current = this.root;
    while (current || stack.length !== 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      result.push(current.value);
      current = current.right;
    }
    return result;
  };

  postorder = () => {
    if (!this.root) {
      return [];
    }

    const result = [];

    const traverse = (root: Node) => {
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
      result.push(root.value);
    };

    traverse(this.root);
    return result;
  };

  postorderStack = () => {
    let result = [];
    let stack = [];
    let current = this.root;
    while (current || stack.length !== 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();

      if (current.right) {
        stack.push(new Node(current.value)); // push new node without right child (in order to avoid infinite loop)
        current = current.right;
      } else {
        result.push(current.value);
        current = null;
      }
    }

    return result;
  };

  levelorder = () => {
    let result = [];
    function traverse(root, level) {
      if (!root) return;

      if (!result[level]) result[level] = [];

      result[level].push(root.value);
      traverse(root.left, level + 1);
      traverse(root.right, level + 1);
    }
    traverse(this.root, 0);
    return result;
  };
}

let tree = new BinarySearchTree();
tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(7);
tree.insert(22);
tree.insert(17);
tree.insert(13);
tree.insert(5);
tree.insert(9);
tree.insert(27);
console.log(JSON.stringify(tree));

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17

console.log(tree.preorder());
console.log(tree.preorderStack());

console.log(tree.inorder());
console.log(tree.inorderStack());

console.log(tree.postorder());
console.log(tree.postorderStack());

console.log(tree.levelorder());
