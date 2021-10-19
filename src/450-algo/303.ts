class SpecialStack {
  root: Array<any>;
  length: number;
  size: number;
  minNumber: number;

  constructor(n: number) {
    this.root = new Array();
    this.size = n;
    this.length = 0;
    this.minNumber = Number.MAX_SAFE_INTEGER;
  }

  push = (val: number) => {
    if (this.root.length < this.size) {
      this.root.push(val);
      this.length++;
      this.minNumber = Math.min(this.minNumber, val);
    }
  };

  peek = () => {
    return this.root[this.root.length - 1];
  };

  pop = () => {
    if (this.root.length === 0) return 'Underflow!!';

    if (this.root.pop() !== undefined) this.length--;
  };

  isEmpty = () => {
    return this.length === 0;
  };

  isFull = () => {
    return this.root.length === this.size;
  };

  getMin = () => {
    return this.minNumber;
  };
}

const speacialStack = new SpecialStack(5);
speacialStack.push(18);
speacialStack.push(19);
speacialStack.push(29);
speacialStack.push(15);
speacialStack.push(16);
console.log(speacialStack.root);
console.log(speacialStack.isFull());
speacialStack.pop();
console.log(speacialStack.isFull());
console.log(speacialStack.getMin());
console.log(speacialStack.isEmpty());
speacialStack.pop();
speacialStack.pop();
speacialStack.pop();
speacialStack.pop();
console.log(speacialStack.isEmpty());
