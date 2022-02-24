// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list

import { LinkedList } from '../../../data-structure/linkedList/single-linked-list.ts';

const returnKthToLastElement = (list: LinkedList, k: number) => {
  const result = null;
  const findElementNumber = list.length - 1 - k;
  if (findElementNumber < 0) return result;

  if (findElementNumber === 0) return list.head.value;

  let i = 1;
  let current = list.head.next;

  while (i < findElementNumber) {
    current = current.next;
    i++;
  }
  return current.value;
};

const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(4);
console.log(linkedList.printList());

console.log(returnKthToLastElement(linkedList, 1));
console.log(linkedList.printList());
