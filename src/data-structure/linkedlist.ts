// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
// https://daveceddia.com/linked-lists-javascript/
// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

class Node {
  public data: any;
  public next: any;

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  public head: any;
  public count: any;

  constructor(head = null) {
    this.head = head;
    this.count = 0;
  }

  Add(data) {
    let newNode = new Node(data);

    if (this.head === null) this.head = newNode;
    else {
      let tail = this.head;
      while (tail.next !== null) tail = tail.next;

      tail.next = newNode;
    }

    this.count++;
    return this.head;
  }

  IsEmpty() {
    this.head = null;
    this.count = 0;
  }

  DeleteFirst() {
    this.head = this.head.next;
    this.count--;
    return this.head;
  }

  DeleteLast() {
    let current = this.head;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.count--;
    return this.head;
  }

  AddNodeInHead(head, node, isFull = false, isNodeInclude = true) {
    let current = head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next =
      !isFull && isNodeInclude
        ? new Node(node.data, node.next)
        : !isFull && !isNodeInclude
        ? new Node(node.data)
        : new Node(node.data);
    return head;
  }

  DeleteFromElement(element = 1) {
    let current = this.head;
    let previous = null;
    let isFind = false;

    while (current.next !== null) {
      console.log(current);
      if (current.data === element) {
        current = current.next;
        previous = this.AddNodeInHead(previous, current, true);
        isFind = true;
        break;
      } else {
        previous = previous === null ? new Node(current.data) : this.AddNodeInHead(previous, current);
        current = current.next;
      }
    }

    if (isFind) {
      this.head = previous;
      this.count--;
    }

    return this.head;
  }

  DeleteFromIndex(element = 0) {
    let current = this.head;
    let count = 0;
    let previous = null;

    if (element === 0) {
      this.head = this.head.next;
      this.PrintList();
      return;
    }

    while (current != null) {
      if (count === element) {
        if (current.next !== null) previous = this.AddNodeInHead(previous, current.next, true);

        this.head = previous;
        this.PrintList();
        break;
      }

      count++;
      previous = previous === null ? new Node(current.data) : this.AddNodeInHead(previous, current, false, false);
      current = current.next;
    }
  }

  PrintList() {
    let current = this.head;
    while (current.next) {
      console.log(`data is ${current.data}`);
      current = current.next;
      if (current.next === null) {
        console.log(`data is ${current.data}`);
        break;
      }
    }
  }

  IndexOf(element) {
    let current = this.head;
    let count = 0;

    while (current != null) {
      if (current.data == element) return count;
      count++;
      current = current.next;
    }

    return -1;
  }

  Length() {
    return this.count;
  }

  Show() {
    return this.head;
  }
}

module.exports = { Node, List };

// export default { Node, List }

// var list = new List();
// list.Add(5);
// list.Add(2);
// list.Add(7);
// list.Add(9);
// list.Add(8);
// list.Add(6);
// list.DeleteFromIndex();
// list.PrintList();
// list.Add(7);
// list.Add(9)
// list.deleteFirst();
// console.log(list.deleteFromElement(2));
// console.log(list.Length());
// list.PrintList();
// list.IndexOf(8);
