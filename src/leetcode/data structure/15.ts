const mergeTwoLists = (l1, l2) => {
  let head = null;

  // edge cases
  if (l1 === null && l2 === null) return head;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  let current = l1;
  let current2 = l2;

  let isL1Completed = false;
  let isL2Completed = false;

  let i = 0;
  while (true) {
    if (current.val >= current2.val) {
      if (head === null) {
        head = {
          val: current.val,
          next: null
        };
      } else {
        let current = head;
        // console.log(current);
        while (current.next) {
          current = current.next;
          console.log(current);
        }
      }
    } else {
      if (head === null) {
        head = {
          val: current.val,
          next: null
        };
      } else {
        head.next = {
          val: current.val,
          next: null
        };
      }
      head = head.next;
    }

    if (i === 10) return 10;
    i++;
  }
};

const head1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
};

const head2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
};

console.log(mergeTwoLists(head1, head2));
