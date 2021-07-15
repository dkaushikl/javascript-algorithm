class Node {
  value: number;
  next: any;
  prev: any;

  constructor(value: any, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class DoublyLinkedList {
  head: Node;
  tail: Node;
  length: number;

  constructor(value: number) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend = (value: any) => {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  };

  append = (value: number) => {
    const newNode = new Node(value, null, null);
    newNode.prev = this.tail;
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

    // newNode.next = leader.next;
    // newNode.prev = leader;
    // leader.next = newNode;
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
    console.log(leader);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  };
}

const linkedList = new DoublyLinkedList(1);
linkedList.append(2);
console.log(linkedList.printList());

linkedList.prepend(0);
console.log(linkedList.printList());

linkedList.append(3);
console.log(linkedList.printList());

linkedList.append(3);
console.log(linkedList.printList());
// console.log(linkedList.findPreviousNodeByIndex(2));

linkedList.insertAt(4, 4);
console.log(linkedList.printList());

linkedList.removeHead();
console.log(linkedList.printList());

linkedList.removeTail();
console.log(linkedList.printList());

linkedList.remove(2);
console.log(linkedList.printList());

console.log(linkedList.length);
console.log(linkedList.tail);
