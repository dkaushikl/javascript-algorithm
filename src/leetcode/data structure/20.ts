class MyQueue {
  stack1 = [];
  stack2 = [];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push = x => {
    this.stack1.push(x);
  };

  pop = () => {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
    var pop = this.stack2.pop();
    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
    return pop;
  };

  peek = () => {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }

    var pop = this.stack2.pop();

    this.stack2.push(pop);

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }

    return pop;
  };

  empty = () => {
    return this.stack1.length === 0 ? true : false;
  };
}

// Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue();
console.log(obj.push(1));
console.log(obj.push(2));
console.log(obj.push(3));
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.empty());
