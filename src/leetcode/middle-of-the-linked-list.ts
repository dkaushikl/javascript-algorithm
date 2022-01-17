const middleNode = head => {
  if (!head) return head;
  if (head.next === null) return head;

  let map = {};
  let len = 1;
  let current = head;

  while (current.next != null) {
    current = current.next;
    map[len++] = current;
  }

  return map[Math.floor(len / 2)];
};

const middleNode1 = head => {
  if (!head) return head;
  let slow = head,
    fast = head;

  while (fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

const node = {
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

console.log(middleNode1(node));
