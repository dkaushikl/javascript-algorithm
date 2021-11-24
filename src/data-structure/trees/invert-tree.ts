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

  invertTree = root => {
    if (root === null) return;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    this.invertTree(root.right);
    this.invertTree(root.left);

    return root;
  };
}

let tree = new BinarySearchTree();
tree.insert(4);
tree.insert(2);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(9);
console.log(JSON.stringify(tree));

console.log(JSON.stringify(tree.invertTree(tree.root)));
