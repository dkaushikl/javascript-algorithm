// Describe how you could use a single array to implement three stacks.
// https://medium.com/@emmabostian/creating-3-stacks-with-1-array-in-javascript-e1171d661e89

class ThreeInOne {
  stacks = [];
  length = [];

  push1 = (val: number) => {
    if (!this.stacks[0]) {
      this.stacks[0] = [];
      this.length[0] = 0;
    }

    this.stacks[0].push(val);
    this.length[0]++;
  };

  push2 = (val: number) => {
    if (!this.stacks[1]) {
      this.stacks[1] = [];
      this.length[1] = 0;
    }

    this.stacks[1].push(val);
    this.length[1]++;
  };

  push3 = (val: number) => {
    if (!this.stacks[2]) {
      this.stacks[2] = [];
      this.length[2] = 0;
    }

    this.stacks[2].push(val);
    this.length[2]++;
  };

  pop1 = () => {
    if (this.stacks[0]) {
      this.stacks[0].pop();
      this.length[0]--;
    }
  };

  pop2 = () => {
    if (this.stacks[1]) {
      this.stacks[1].pop();
      this.length[1]--;
    }
  };

  pop3 = () => {
    if (this.stacks[2]) {
      this.stacks[2].pop();
      this.length[2]--;
    }
  };

  peek1 = () => {
    if (this.stacks[0]) {
      return this.stacks[0][0];
    }
    return null;
  };

  peek2 = () => {
    if (this.stacks[1]) {
      return this.stacks[1][0];
    }
    return null;
  };
  peek3 = () => {
    if (this.stacks[2]) {
      return this.stacks[2][0];
    }
    return null;
  };
}

const threeInOne = new ThreeInOne();
threeInOne.push1(1);
threeInOne.push1(2);
threeInOne.push1(3);
threeInOne.push2(4);
threeInOne.push2(5);
threeInOne.push2(6);
threeInOne.push3(7);
threeInOne.push3(8);
threeInOne.push3(9);
threeInOne.pop1();
threeInOne.pop2();
threeInOne.pop3();
console.log(threeInOne.peek1());
console.log(threeInOne.peek2());
console.log(threeInOne.peek3());
console.log(threeInOne);
