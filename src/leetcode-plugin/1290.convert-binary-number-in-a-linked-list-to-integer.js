/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
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
 * @return {number}
 */
var getDecimalValue = function(head) {
  let result = '';

  let curr = head;

  while (curr) {
    result += curr.val;
    curr = curr.next;
  }

  return parseInt(result, 2);
};
// @lc code=end

console.log(getDecimalValue([1, 0, 1]));
