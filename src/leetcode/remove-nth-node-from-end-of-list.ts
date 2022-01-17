const removeNthFromEnd = (head, n) => {
  if (!head) return null;

  const map = {};
  let i = 0;
  let current = head;

  while (current) {
    map[i] = current;
    current = current.next;
    i++;
  }

  head = null;

  for (const item of Object.entries(map)) {
    if (parseInt(item[0]) !== i - n) {
      if (head == null) {
        head = {
          val: item[1] && item[1].val,
          next: null
        };
      } else {
        if (head.next === null) {
          head.next = {
            val: item[1] && item[1].val,
            next: null
          };
          continue;
        }

        let current = head.next;
        while (current.next) {
          current = current.next;
        }

        current.next = {
          val: item[1] && item[1].val,
          next: null
        };
      }
    }
  }

  return head;
};

const removeNode = {
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

console.log(removeNthFromEnd(removeNode, 2));
