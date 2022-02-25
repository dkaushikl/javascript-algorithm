/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     let item = head;
//     let arr = [];
//     while (item) {
//         arr.push(item.val);
//         item = item.next;
//     }

//     n = arr.length - n;
//     arr.splice(n, 1);

//     arr = arr.map((el) => new ListNode(el));

//     let curr = new ListNode(0);
//     let newcurr = curr;
//     for (let item of arr) {
//         newcurr.next = item;
//         newcurr = newcurr.next;
//     }

//     return curr.next || null;
// };

var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;

  while (n--) {
    (fast = fast), next;
  }

  console.log(fast);
};
// @lc code=end
