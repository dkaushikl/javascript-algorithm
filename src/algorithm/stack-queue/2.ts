class Node {
  value: any;
  next: any;

  constructor(value) {
    this.value = value;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class Queue {
  first: any;
  last: any;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue = value => {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  };

  dequeue = () => {
    if (!this.first) return null;

    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.length--;

    return this;
  };

  isEmpty = () => this.length === 0;

  peek = () => this.first;
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
queue.dequeue();
queue.dequeue();
console.log(queue);
console.log(queue.isEmpty());
console.log(queue.peek());
