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

const reverseList2 = head => {
  const traverse = (current, prev) => {
    if (!current) return prev;
    const next = current.next;
    current.next = prev;
    return traverse(next, current);
  };

  return traverse(head, null);
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
