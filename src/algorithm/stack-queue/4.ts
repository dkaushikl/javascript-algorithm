// Implement Stack from scratch

export class Node {
  value: any;
  next = null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class Stack {
  top: any;
  bottom: any;
  length = 0;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek = () => this.top;

  pop = () => {
    if (this.length > 0) {
      this.top = this.top.next;
      this.length--;
    }

    return this;
  };

  push = value => {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  };
}

const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
