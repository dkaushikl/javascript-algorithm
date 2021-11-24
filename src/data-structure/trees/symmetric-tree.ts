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

  isSymmetric = root => {
    const checkTree = (root1, root2) => {
      if (root1.value !== root2.value) return false;
      return (
        checkTree(root1.left, root2.right) || checkTree(root2.left, root1.right)
      );
    };

    return checkTree(root.left, root.right);
  };
}

let tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(4);
tree.insert(2);
console.log(JSON.stringify(tree));

console.log(tree.isSymmetric(tree.root));
