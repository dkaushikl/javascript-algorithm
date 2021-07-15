// Palindrome: Implement a function to check if a linked list is a palindrome

import { LinkedList } from '../../../structure/linked-list/single-linked-list';

const palindrom = (list: LinkedList) => {
  const length = list.length;
  if (length % 2 === 0) return false;

  let string1 = '';
  let string2 = '';
  let current = list.head;

  while (current) {
    string1 += current.value;
    string2 = current.value + string2;
    current = current.next;
  }

  return string1 === string2;
};

const linkedList = new LinkedList(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(1);
console.log(palindrom(linkedList));
console.log(linkedList.printList());
