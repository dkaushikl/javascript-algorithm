// Implement an algorithm to delete a node in the middle (i.e., any node but
// the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
// that node.

import { LinkedList } from '../../../structure/linked-list/single-linked-list';

const deleteMiddleNode = (list: LinkedList) => {
  const deleteNodeIndex =
    list.length % 2 === 0 ? list.length / 2 : Math.floor(list.length / 2);

  if (deleteNodeIndex >= 0) {
    if (deleteNodeIndex === 0) {
      list.head = null;
      list.length = 0;
      return null;
    }

    let i = 0;
    let previous;
    let current = list.head;

    while (i <= deleteNodeIndex) {
      if (i === deleteNodeIndex) {
        previous.next = current.next;
        return list;
      } else {
        previous = current;
        current = current.next;
      }
      i++;
    }
  } else {
    return null;
  }
};

const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(4);
console.log(linkedList.printList());

console.log(deleteMiddleNode(linkedList));
console.log(linkedList.printList());
