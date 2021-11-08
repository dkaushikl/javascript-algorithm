class Stack {
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
}

const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.printStack());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log(stack.peek() === 0);
stack.pop();
console.log(stack.isEmpty());
