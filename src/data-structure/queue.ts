class queueArray {
  public queue: any;

  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.queue.length <= 0) return 'Queue is empty';

    this.queue.shift();
  }

  peek() {
    if (this.queue.length <= 0) return 'Queue is empty';

    return this.queue[this.queue.length - 1];
  }

  count() {
    if (this.queue.length <= 0) return 'Queue is empty';

    return this.queue.length;
  }

  show() {
    if (this.queue.length <= 0) return 'Queue is empty';

    this.queue.forEach(element => {
      console.log(element);
    });
  }
}

class Node {
  public data: any;
  public next: any;

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class queueLinkedList {
  public queue: any;

  constructor() {
    this.queue = null;
  }

  enqueue(element) {
    let node = new Node(element, null);

    let current = this.queue;
    if (current === null) {
      this.queue = node;
    } else {
      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    return this.queue;
  }

  dequeue() {
    let current = this.queue;
    if (current === null) return 'Queue is empty';

    this.queue = current.next;
    return current.data;
  }
}

let queues = new queueLinkedList();
queues.enqueue(2);
queues.enqueue(5);
console.log(queues.queue);
queues.dequeue();
console.log(queues.queue);

// let queues = new queueArray();
// queues.enqueue(2);
// queues.enqueue(5);
// queues.show();
// queues.dequeue();
// queues.show();
// console.log(`========`);
// console.log(queues.peek());
// console.log(queues.count());

function checkTwoAnagram(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  let a1 = {};
  let b1 = {};

  a.split('').forEach(x => {
    if (a1[x]) a1[x] += 1;
    else a1[x] = 1;
  });

  b.split('').forEach(x => {
    if (b1[x]) b1[x] += 1;
    else b1[x] = 1;
  });

  const totalLength = a.length + b.length;
  let availableLength = 0;

  for (const [x, value] of Object.entries(a1)) {
    if (b1[x]) {
      availableLength += 2;
      b1[x] -= 1;
    }
  }

  return totalLength - availableLength;
}
