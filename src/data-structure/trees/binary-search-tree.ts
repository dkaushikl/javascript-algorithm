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

// tslint:disable-next-line:max-classes-per-file
export class BinarySearchTree {
  root: any;
  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left side
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    if (currentNode.value === value) {
      this.root = null;
      return;
    }

    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        if (currentNode.right === null) {
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
console.log(JSON.stringify(tree));
tree.lookup(170);
console.log(JSON.stringify(tree));
tree.remove(6);
