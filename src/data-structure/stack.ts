class stackArray {
  public stacks: any;

  constructor() {
    this.stacks = [];
  }

  push(element) {
    this.stacks.push(element);
  }

  pop() {
    if (this.stacks.length > 0) return this.stacks.pop();
    else return `Stack is Empty`;
  }

  peek() {
    if (this.stacks.length > 0) return this.stacks[this.stacks.length - 1];
    else return `Stack is Empty`;
  }

  isEmpty() {
    return this.stacks.length <= 0;
  }

  show() {
    console.log(this.stacks.length);
    for (let i = this.stacks.length; i > 0; i--) {
      console.log(this.stacks[i - 1]);
    }
  }
}

class Node {
  public data: any;
  public next: any;

  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

class stackLinkedList {
  public stack: any;

  constructor() {
    this.stack = null;
  }

  push(element) {
    let current = this.stack;
    let node = new Node(element, null);

    if (current != null) node.next = current;

    this.stack = node;
    return this.stack;
  }

  pop() {
    if (this.stack === null) return 'Stack is Empty';

    this.stack = this.stack.next;
    return this.stack;
  }

  isEmpty() {
    return this.stack === null;
  }

  clear() {
    this.stack = null;
  }

  size() {
    let current = this.stack;
    let count = 0;

    if (this.stack === null) return count;

    while (current != null) {
      count++;
      if (current.next === null) break;
      current = current.next;
    }

    return count;
  }
}

let stackLinked = new stackLinkedList();
stackLinked.push(1);
console.log(stackLinked.stack);
stackLinked.pop();
console.log(stackLinked.stack);
console.log('-----');
console.log(stackLinked.stack);
stackLinked.push(1);
console.log(stackLinked.size());
// let stacky = new stackArray();
// console.log(stacky.peek());
// stacky.push("Kaushik");
// stacky.push("Here");
// stacky.show();
// console.log(stacky.peek());
// console.log('-----');
// stacky.isEmpty();
// stacky.pop();
// stacky.show();
