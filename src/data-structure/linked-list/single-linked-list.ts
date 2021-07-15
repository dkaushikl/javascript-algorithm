import { Node } from '../Node';

// tslint:disable-next-line:max-classes-per-file
export class LinkedList {
  head: Node;
  tail: Node;
  length: number;

  constructor(value: number) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend = (value: any) => {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  };

  append = (value: number) => {
    const newNode = new Node(value, null);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };

  insertAt = (index: number, value: number) => {
    if (index === 0) return this.prepend(value);

    if (index >= this.length) return this.append(value);

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this;
  };

  traverseToIndex = (index: number) => {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  };

  printList = () => {
    const array: number[] = [];

    if (this.head) {
      let current = this.head;
      while (current.next) {
        array.push(current.value);
        current = current.next;
      }
      array.push(current.value);
    }
    return array;
  };

  removeHead = () => {
    if (this.length <= 0) return 'Must be have data in linked list';

    if (this.head) {
      this.head = this.head?.next;
      this.length--;
    }
  };

  removeTail = () => {
    if (this.length <= 0) return 'Must be have data in linked list';

    if (this.head) {
      let current = this.head;
      while (current.next) {
        if (current.next.next) current = current.next;
        else {
          current.next = null;
          this.tail = current;
          this.length--;
        }
      }
    }
  };

  remove = (index: number) => {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  };

  removeKthNode = (index: number) => {
    if (index > linkedList.length) return this;

    const current = this.head;

    if (index === 0) {
      this.removeHead();
      return this;
    }

    let count = 1;
    const removeKthNodeRecursive = (curr: Node, prevCurr: Node) => {
      if (count === index) {
        prevCurr.next = curr.next;
        curr = curr.next;
        this.length--;
      }

      if (!curr || !curr.next) {
        return;
      }

      count++;
      removeKthNodeRecursive(curr.next, curr);
    };

    removeKthNodeRecursive(current, current);
    return this;
  };

  printAlternativeNodes = () => {
    const array: number[] = [];

    const printAlternativeNodesRecursive = (curr: Node, count: number) => {
      count++;
      if (count % 2 !== 0) array.push(curr.value);

      if (!curr || !curr.next) return;
      printAlternativeNodesRecursive(curr.next, count);
    };

    array.push(this.head.value);
    printAlternativeNodesRecursive(this.head.next, 1);
    return array;
  };

  middleElement = () => {
    const totalLength = this.length;
    const middleNumber = Math.floor(totalLength / 2);
    let findElement = -1;

    if (middleNumber === 0) return this.head.value;

    const middleElementRecursive = (curr: Node, count: number) => {
      count++;
      if (middleNumber === count) {
        findElement = curr.value;
        return;
      }

      if (!curr || !curr.next) return;
      middleElementRecursive(curr.next, count);
    };

    middleElementRecursive(this.head.next, 0);
    return findElement;
  };
}

const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(9);
linkedList.append(6);
linkedList.append(5);
linkedList.append(8);
linkedList.append(7);
console.log(linkedList.printList());

linkedList.prepend(0);
console.log(linkedList.printList());

linkedList.append(3);
console.log(linkedList.printList());

linkedList.insertAt(4, 5);
console.log(linkedList.printList());

linkedList.removeHead();
console.log(linkedList.printList());

linkedList.removeTail();
console.log(linkedList.printList());

linkedList.remove(2);
console.log(linkedList.printList());

console.log(linkedList.removeKthNode(6));
console.log(linkedList.printList());

console.log(linkedList.printAlternativeNodes());
console.log(linkedList.printList());

console.log(linkedList.middleElement());
