const reverseList = head => {
  if (!head) return null;

  let result = null;
  let current = head;

  while (current) {
    result = {
      val: current.val,
      next: result
    };
    current = current.next;
  }
  return result;
};

const reverseListRecursive = (head, result = null) => {
  if (!head) return result;

  result = {
    val: head.val,
    next: result
  };

  return reverseListRecursive(head.next, result);
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
};

console.log(JSON.stringify(reverseListRecursive(head)));
