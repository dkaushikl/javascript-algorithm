const deleteDuplicates = (head) => {
  if (!head) return null;
  if (!head.next) return head;

  let result = null;
  let current = head;
  let previousVal = null;

  while (current) {
    if (current.val !== previousVal) {
      if (result === null) {
        result = {
          val: current.val,
          next: null
        };
      } else {
        let current1 = result;
        while (current1.next) {
          current1 = current1.next;
        }
        current1.next = {
          val: current.val,
          next: null
        };
      }
    }
    previousVal = current.val;
    current = current.next;
  }
  return result;
};

const head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null
    }
  }
};

console.log(JSON.stringify(deleteDuplicates(head)));
