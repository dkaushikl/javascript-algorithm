export class Stack {
  array: string[];
  length: number;

  constructor() {
    this.array = [];
    this.length = 0;
  }

  peek = () => {
    return this.array[this.array.length - 1];
  };

  push = (value: any) => {
    this.array.push(value);
    this.length++;
    return this;
  };

  pop = () => {
    this.array.pop();
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
