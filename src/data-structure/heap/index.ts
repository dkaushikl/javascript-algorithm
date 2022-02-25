// fews utility method to access parent and child value
class Heap {
  items = [];

  swap = (index1, index2) =>
    ([this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1]
    ]);
  parentIndex = index => Math.floor((index - 1) / 2);
  leftChildIndex = index => index * 2 + 1;
  rightChildIndex = index => index * 2 + 2;
  parent = index => this.items[this.parentIndex(index)];
  leftChild = index => this.items[this.leftChildIndex(index)];
  rightChild = index => this.items[this.rightChildIndex(index)];
  peek = () => this.items[0];
  size = () => this.items.length;
  parentItems = () => this.items;
}

class MinHeap extends Heap {
  items = [];

  constructor() {
    super();
  }

  add = item => {
    this.items.push(item);
    this.bubbleUp();
  };

  poll = () => {
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  };

  bubbleDown = () => {
    let index = 0;

    while (
      this.leftChild(index) < this.items[index] ||
      this.rightChild(index) < this.items[index]
    ) {
      let smallerIndex = this.leftChildIndex(index);

      if (this.rightChild(index) < this.items[smallerIndex])
        smallerIndex = this.rightChildIndex(index);

      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  };

  bubbleUp = () => {
    let index = this.items.length - 1;
    while (this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  };
}

const minHeap = new MinHeap();
minHeap.add(1);
minHeap.add(10);
minHeap.add(5);
minHeap.add(100);
minHeap.add(8);

console.log(minHeap.poll());
console.log(minHeap.poll());
console.log(minHeap.poll());
console.log(minHeap.poll());
console.log(minHeap.poll());

class MaxHeap extends Heap {
  items = [];

  constructor() {
    super();
  }

  add = item => {
    this.items.push(item);
    this.bubbleUp();
  };

  poll = () => {
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  };

  bubbleDown = () => {
    let index = 0;

    while (
      this.leftChild(index) > this.items[index] ||
      this.rightChild(index) > this.items[index]
    ) {
      let smallerIndex = this.leftChildIndex(index);

      if (this.rightChild(index) > this.items[smallerIndex])
        smallerIndex = this.rightChildIndex(index);

      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  };

  bubbleUp = () => {
    let index = this.items.length - 1;
    while (this.parent(index) < this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  };
}

const maxHeap = new MaxHeap();
maxHeap.add(1);
maxHeap.add(10);
maxHeap.add(5);
maxHeap.add(100);
maxHeap.add(8);

console.log(maxHeap.poll());
console.log(maxHeap.poll());
console.log(maxHeap.poll());
console.log(maxHeap.poll());
console.log(maxHeap.poll());

// Time Complexity

// Delete operation - BubbleDown - O(log2(n))
// Insert operation - BubbleUp - O(log2(n))

class MedianHeap {
  minHeap = new MinHeap();
  maxHeap = new MaxHeap();

  push = val => {
    if (val > this.median()) {
      this.minHeap.add(val);
    } else {
      this.maxHeap.add(val);
    }

    // Re balancing
    if (this.minHeap.size() - this.maxHeap.size() > 1) {
      this.maxHeap.add(this.minHeap.poll());
    }

    if (this.maxHeap.size() - this.minHeap.size() > 1) {
      this.minHeap.add(this.maxHeap.poll());
    }
  };

  median = () => {
    if (this.minHeap.size() === 0 && this.maxHeap.size() === 0) {
      return Number.NEGATIVE_INFINITY;
    } else if (this.minHeap.size() === this.maxHeap.size()) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      return this.minHeap.peek();
    } else {
      return this.maxHeap.peek();
    }
  };
}

const medianHeap = new MedianHeap();
medianHeap.push(12);
console.log(medianHeap.median());
medianHeap.push(2);
console.log(medianHeap.median());
medianHeap.push(23);
console.log(medianHeap.median());
medianHeap.push(13);
console.log(medianHeap.median());

const getKthBiggestElement = (arr, k) => {
  const maxHeap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    maxHeap.add(arr[i]);
  }

  for (let i = 0; i < k; i++) {
    if (i === k - 1) {
      return maxHeap.poll();
    } else {
      maxHeap.poll();
    }
  }
};

const arr = [12, 3, 13, 4, 2, 40, 23];
console.log(getKthBiggestElement(arr, 2));
console.log(getKthBiggestElement(arr, 1));
console.log(getKthBiggestElement(arr, 7));

// Time Complexity: O(klog2(n))
// Space Complexity: O(n)
