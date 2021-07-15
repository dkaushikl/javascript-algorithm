class Node {
  value: string;
  next: any;

  constructor(val: string, next = null) {
    this.value = val;
    this.next = next;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class Stack {
  top: any;
  bottom: any;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek = () => {
    return this.top;
  };

  push = (value: any) => {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  };

  pop = () => {
    if (!this.top) return null;

    if (this.top === this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.length--;
    return this;
  };
}

const stack = new Stack();
stack.push('google');
stack.push('walmart');
stack.push('amazon');
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
