class MiddleStack {
  root: Array<any>;
  length: number;

  constructor() {
    this.root = [];
    this.length = 0;
  }

  push = (val: number) => {
    this.root.push(val);
    this.length++;
  };

  peek = () => {
    return this.root[this.root.length - 1];
  };

  pop = () => {
    if (this.root.length === 0) throw 'Underflow!!';

    if (this.root.pop() !== undefined) this.length--;
  };

  isEmpty = () => {
    return this.length === 0;
  };

  printStack = () => {
    for (const item of this.root) {
      console.log(item);
    }
  };

  _findMiddle = () => {
    if (this.root.length <= 0) return -1;
    return Math.floor(this.root.length / 2);
  };

  _deleteMiddleUtill = (root, index, mid) => {
    if (index === mid) return this._deleteMiddleUtill(root, index + 1, mid);
    root.push(this.root[index]);

    if (this.root.length - 1 === index) return root;
    else return this._deleteMiddleUtill(root, index + 1, mid);
  };

  deleteMiddle = () => {
    const mid = this._findMiddle();
    this.root = this._deleteMiddleUtill([], 0, mid);
    return this.root;
  };
}

const middleStack = new MiddleStack();
middleStack.push(1);
middleStack.push(2);
middleStack.push(3);
middleStack.push(4);
middleStack.push(5);

console.log(middleStack.deleteMiddle());
