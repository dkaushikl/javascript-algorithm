const reorderList = head => {
  //Base Case - if root will not have any two child then we will simply return head and it will attach to recursive.
  if (!head || !head.next || !head.next.next) return head;

  // will create two current and previous variable. it will track last and previous value
  let curr = head;
  let prev = head;

  while (curr.next) {
    prev = curr;
    curr = curr.next;
  }

  // will shift entire list one move ahead and attach with head next
  prev.next = null;
  let temp = head.next;
  head.next = curr;
  head.next.next = temp;

  // pass down other list to check whether we need to shift other values
  head.next.next = reorderList(head.next.next);

  return head;
};

const reorderList1 = head => {
  if (!head) return;
  let stack = [],
    node = head;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let len = stack.length;
  node = head;

  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      node.next = stack.shift();
    } else {
      node.next = stack.pop();
    }
    node = node.next;
  }
  node.next = null;
  console.log(JSON.stringify(head));
};

const linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

console.log(JSON.stringify(reorderList1(linkedList)));

// [1,2,3,4,5,6,7]
// [1,7,2,6,3,5,4]
