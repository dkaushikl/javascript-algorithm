const mergeTwoLists = (l1, l2) => {
  let head = null;

  // edge cases
  if (l1 === null && l2 === null) return head;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let current1 = l1;
  let current2 = l2;
  let isFirst = false;
  while (current1 || current2) {
    if (
      current2 === null ||
      (current1 != null && current1.val <= current2.val)
    ) {
      isFirst = true;
    } else if (
      current1 === null ||
      (current2 != null && current2.val < current1.val)
    ) {
      isFirst = false;
    }
    if (head === null) {
      head = {
        val: isFirst ? current1.val : current2.val,
        next: null
      };
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = {
        val: isFirst ? current1.val : current2.val,
        next: null
      };
    }

    if (isFirst) current1 = current1.next;
    else current2 = current2.next;
  }

  return head;
};

const head1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 5,
        next: {
          val: 7,
          next: null
        }
      }
    }
  }
};

const head2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 6,
        next: {
          val: 9,
          next: null
        }
      }
    }
  }
};

console.log(JSON.stringify(mergeTwoLists(head1, head2)));
