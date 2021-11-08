class TwoStack {
  root: Array<any>;
  size: number;
  firstLength: number;
  secondLength: number;

  constructor(n: number) {
    this.root = new Array(n);
    this.size = n;
    this.firstLength = -1;
    this.secondLength = n;
  }

  push1 = (val: number) => {
    if (this.firstLength < this.secondLength - 1) {
      this.firstLength += 1;
      this.root[this.firstLength] = val;
    } else {
      return 'overflow';
    }
  };

  push2 = (val: number) => {
    if (this.secondLength > this.firstLength + 1) {
      this.secondLength -= 1;
      this.root[this.secondLength] = val;
    } else {
      return 'overflow';
    }
  };

  pop1 = () => {
    if (this.firstLength > -1) {
      let val = this.root[this.firstLength];
      this.root[this.firstLength] = '';
      this.firstLength--;
      return val;
    } else {
      return -1;
    }
  };

  pop2 = () => {
    if (this.secondLength < this.size) {
      this.secondLength++;
      let val = this.root[this.secondLength - 1];
      this.root[this.secondLength - 1] = '';
      return val;
    } else {
      return -1;
    }
  };
}

const twoStack = new TwoStack(10);
twoStack.push1(1);
twoStack.push1(2);
twoStack.push1(3);
twoStack.push1(4);
twoStack.push1(5);

twoStack.push2(10);
twoStack.push2(9);
twoStack.push2(8);
twoStack.push2(7);
twoStack.push2(6);

console.log(twoStack.push1(50));
console.log(twoStack.push2(50));

console.log(twoStack.pop2());
console.log(twoStack.pop2());
console.log(twoStack.pop2());
console.log(twoStack.pop2());
console.log(twoStack.pop2());
console.log(twoStack.pop2());

console.log(twoStack.root);

console.log(twoStack.pop1());
console.log(twoStack.pop1());
console.log(twoStack.pop1());
console.log(twoStack.pop1());
console.log(twoStack.pop1());
console.log(twoStack.pop1());

console.log(twoStack.root);
