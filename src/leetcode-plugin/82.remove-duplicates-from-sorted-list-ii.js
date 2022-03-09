/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
  const stack = [];
  let curr = head;
  let previous = Number.MIN_SAFE_INTEGER;
  while (curr) {
    if (stack[stack.length - 1] === curr.val || previous === curr.val) {
      if (stack[stack.length - 1] === curr.val) previous = stack.pop();
    } else {
      stack.push(curr.val);
    }
    curr = curr.next;
  }

  let newList = null;
  while (stack.length > 0) newList = { val: stack.pop(), next: newList };
  return newList;
};
// @lc code=end

let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: { val: 4, next: { val: 4, next: { val: 5, next: null } } }
      }
    }
  }
};

console.log(deleteDuplicates(list));
