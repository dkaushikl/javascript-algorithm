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

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (current.value > value) {
          if (current.left) current = current.left;
          else {
            current.left = newNode;
            break;
          }
        }

        if (current.value < value) {
          if (current.right) current = current.right;
          else {
            current.right = newNode;
            break;
          }
        } else break;
      }
    }
  }

  remove(value) {
    const findMin = root => {
      while (root.left) {
        root = root.left;
      }
      return root;
    };
    // tslint:disable-next-line:no-shadowed-variable
    const deleteRecursively = (root, value) => {
      if (!root) return null;

      if (value < root.value) {
        root.left = deleteRecursively(root.left, value);
      } else if (value > root.value) {
        root.right = deleteRecursively(root.right, value);
      } else {
        if (!root.left && !root.right) return null;
        else if (!root.left) {
          root = root.right;
          return root;
        } else if (!root.right) {
          root = root.left;
          return root;
        } else {
          const temp = findMin(root.right);
          root.value = temp.value;
          root.right = deleteRecursively(root.right, temp.value);
          return root;
        }
      }
    };

    return deleteRecursively(this.root, value);
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
console.log(JSON.stringify(tree));
tree.remove(4);
// tree.remove(6);
