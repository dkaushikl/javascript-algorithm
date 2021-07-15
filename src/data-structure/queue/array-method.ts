export class Queue {
  array: string[] = [];
  length: number;

  constructor() {
    this.array = [];
    this.length = 0;
  }

  peek = () => {
    if (this.array.length <= 0) return 'must be records in array';
    return this.array[0];
  };

  enqueue = (value: any) => {
    this.array.push(value);
    this.length++;
    return this;
  };

  dequeue = () => {
    if (this.array.length <= 0) return null;
    this.array.shift();
    this.length--;
    return this;
  };
}

const queue = new Queue();
queue.enqueue('google');
queue.enqueue('walmart');
queue.enqueue('amazon');
console.log(queue);
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
