class Queue {
  root: Array<any>;
  length: number;

  constructor() {
    this.root = [];
    this.length = 0;
  }

  enqueue = (val: number) => {
    this.root.push(val);
    this.length++;
  };

  dequeue = () => {
    if (this.root.length === 0) throw 'Underflow!!';

    this.root.shift();
    this.length--;
  };

  peek = () => {
    return this.root[0];
  };

  isEmpty = () => {
    return this.length === 0;
  };

  printQueue = () => {
    for (const item of this.root) {
      console.log(item);
    }
  };
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(0);
console.log(queue.printQueue());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.peek() === 0);
queue.dequeue();
console.log(queue.isEmpty());
