/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start

var MyLinkedList = function() {
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index === 0 && this.head === null) return -1;
  if (index === 0) return this.head.val;
  let count = 0;
  let curr = this.head;

  while (curr) {
    curr = curr.next;
    count += 1;

    if (count === index) return curr ? curr.val : -1;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.head = {
    val: val,
    next: this.head
  };
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let curr = this.head;
  while (curr.next) curr = curr.next;
  curr.next = { val: val, next: null };
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head;
  let count = 0;
  let isEnd = false;
  while (curr) {
    count += 1;
    if (count === index) {
      isEnd = true;
      break;
    }
    curr = curr.next;
  }

  if (!isEnd) return;

  curr.next = { val: val, next: curr.next };
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index === 0 && this.head === null) return -1;
  if (index === 0 && this.head) {
    this.head = this.head.next;
    return;
  }

  let curr = this.head;
  let count = 0;
  let isEnd = false;
  while (curr) {
    count += 1;
    if (count === index) {
      isEnd = true;
      break;
    }
    curr = curr.next;
  }

  if (isEnd && curr.next) {
    curr.next = curr.next.next;
  }
};

var myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
// myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
// myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
myLinkedList.get(1);
