const oddEvenList = function(head) {
  const map = {};
  let i = 0;
  let current = head;
  while (current) {
    if (current.val && map[current.val]) {
      return map[current.val];
    } else {
      map[current.val] = i;
      i++;
    }

    current = current.next;
  }
  console.log(map);
  return -1;
};

const linkedList = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: -4,
        next: null
      }
    }
  }
};

console.log(JSON.stringify(oddEvenList(linkedList)));

function swapPairs(head) {
  let curr = head;

  while (curr) {
    if (curr.next === null) {
      break;
    }

    const temp = curr.next.val;
    curr.next.val = curr.val;
    curr.val = temp;
    curr = curr.next.next;
  }

  return head;
}

const linkedList2 = {
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
            val: 3,
            next: null
          }
        }
      }
    }
  }
};

console.log(JSON.stringify(swapPairs(linkedList2)));
