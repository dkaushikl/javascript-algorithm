const removeNthFromEnd = (head, n) => {
  const dummy = {
    val: 0,
    next: head
  };

  let left = dummy,
    right = dummy;
  while (n > -1) {
    right = right.next;
    n--;
  }

  console.log(JSON.stringify(left));
  console.log(JSON.stringify(right));
  console.log(JSON.stringify(dummy));

  while (right) {
    left = left.next;
    right = right.next;
  }

  console.log(JSON.stringify(dummy));
  console.log(JSON.stringify(left));
  console.log(JSON.stringify(right));
  console.log(JSON.stringify(dummy));

  left.next = left.next.next;

  return dummy.next;
};

const removeNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
};

console.log(JSON.stringify(removeNthFromEnd(removeNode, 3)));
