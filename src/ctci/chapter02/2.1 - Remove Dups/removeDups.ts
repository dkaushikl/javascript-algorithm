// Remove Dups: Write code to remove duplicates from an unsorted linked list.

// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

// import { LinkedList } from '../../../structure/linked-list/single-linked-list';

class Node {
  value: number;
  next: any;
  constructor(val: any, next = null) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
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
    console.log(leader);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  };
}

const removeDuplicates = (linkedList: LinkedList) => {
  const map = new Map();

  let current = linkedList.head;
  let previous = current;

  if (current) {
    while (current) {
      if (map.get(current.value) != null) {
        previous.next = current.next;
        current = current.next;
        linkedList.length--;
      } else {
        map.set(current.value, 0);
        previous = current;
        current = current.next;
      }
    }
  }

  return linkedList;
};

const intersection = (list1: LinkedList, list2: LinkedList) => {
  const set = new Set();

  let current1 = list1.head;
  while (current1) {
    set.add(current1);
    current1 = current1.next;
  }

  let current2 = list2.head;
  while (current2) {
    console.log(set);
    if (set.has(current2)) {
      return current2;
    }

    current2 = current2.next;
  }

  return null;
};

const sumLists = (linkedList: LinkedList) => {};

const linkedList = new LinkedList(1);
linkedList.append(3);
linkedList.append(3);
linkedList.append(4);
console.log(linkedList.printList());

removeDuplicates(linkedList);
console.log(linkedList.printList());

console.log(sumLists(linkedList));
console.log(linkedList.printList());

// const linkedList2 = new LinkedList(1);
// linkedList2.append(3);

// console.log(intersection(linkedList, linkedList2));
// console.log(linkedList.printList());
