class binaryTreeNode {
  name: number;
  children: binaryTreeNode[];
  constructor(name) {
    this.name = name;
    this.children = [];
  }
}

class Tree {
  root: binaryTreeNode;

  returnRoot() {
    return this.root;
  }

  insertRoot(value) {
    this.root = new binaryTreeNode(value);
  }

  addChild(value2) {
    const current = this.root;
    while (true) {
      current.children.push(new binaryTreeNode(value2));
      return this.root;
    }
  }
}

const tree = new Tree();
// Create root
tree.insertRoot(10);

// insert inside root
tree.addChild(10, 5);
// tree.addChild(3);
// tree.addChild(7);

tree.insert(10, 20);
// tree.insert(1);
// tree.insert(20);

console.log(tree.returnRoot());
