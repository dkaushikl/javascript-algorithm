const removeElements = (head, val) => {
  if (!head) return null;
  if (head.val === val) return removeElements(head.next, val);

  head.next = removeElements(head.next, val);
  return head;
};

const head = {
  val: 6,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 5,
        next: {
          val: 7,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
};

console.log(JSON.stringify(removeElements(head, 6)));
