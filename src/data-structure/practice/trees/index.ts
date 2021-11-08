class BinarySearchTreeNode {
  value: number;
  left: BinarySearchTreeNode;
  right: BinarySearchTreeNode;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: BinarySearchTreeNode;
  constructor() {
    this.root = null;
  }

  returnRoot() {
    return JSON.stringify(this.root);
  }

  insert(value) {
    if (!this.root) {
      const newNode = new BinarySearchTreeNode(value);
      this.root = newNode;
      return this.root;
    } else {
      let current = this.root;
      while (current.value) {
        if (current.value < value) {
          if (!current.right) {
            current.right = new BinarySearchTreeNode(value);
            return this;
          } else {
            current = current.right;
          }
        } else {
          if (!current.left) {
            current.left = new BinarySearchTreeNode(value);
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  lookup(value) {
    if (this.root != null && this.root.value === value) {
      return true;
    }

    let current = this.root;
    while (current.value) {
      if (value > current.value) current = current.right;
      else current = current.left;

      if (!current) return false;
      if (current.value === value) return true;
    }
  }

  max() {
    if (this.root === null) return -1;

    if (this.root !== null) {
      const rightNode = this.root.right;
      if (rightNode === null) return this.root.value;
    }

    let current = this.root;
    while (current.value) {
      if (!current.right) return current.value;
      current = current.right;
    }
  }

  min() {
    if (this.root === null) return -1;

    if (this.root !== null) {
      const leftNode = this.root.left;
      if (leftNode === null) return this.root.value;
    }

    let current = this.root;
    while (current.value) {
      if (!current.left) return current.value;
      current = current.left;
    }
  }
}

const binarySearchTres = new BinarySearchTree();

// Root
console.log(binarySearchTres.insert(25));

// First Child left
console.log(binarySearchTres.insert(9));
console.log(binarySearchTres.insert(27));

// Under first child left
console.log(binarySearchTres.insert(6));
console.log(binarySearchTres.insert(1));
console.log(binarySearchTres.insert(2));
console.log(binarySearchTres.insert(3));
console.log(binarySearchTres.insert(4));
console.log(binarySearchTres.insert(7));
console.log(binarySearchTres.insert(8));
console.log(binarySearchTres.insert(10));

// First child right
console.log(binarySearchTres.insert(26));
console.log(binarySearchTres.insert(12));
console.log(binarySearchTres.insert(13));
console.log(binarySearchTres.insert(11));
console.log(binarySearchTres.insert(22));

console.log(binarySearchTres.lookup(11));
console.log(binarySearchTres.lookup(21));
console.log(binarySearchTres.max());
console.log(binarySearchTres.min());
console.log(binarySearchTres.returnRoot());
