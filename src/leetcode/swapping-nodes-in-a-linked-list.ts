let swapPairs = head => {
  const temp = {
    val: 0,
    next: null
  };
  temp.next = head;
  console.log(JSON.stringify(temp));
  const recursive = node => {
    if (!node === null) return;
    const first = node.next;
    let second = null;
    if (first != null) {
      second = node.next.next;
    }
    if (second !== null) {
      const secondNext = second.next;
      second.next = first;
      node.next = second;
      first.next = secondNext;
      // go to the next pair and repeat
      recursive(first);
    }
  };
  recursive(temp);
  return temp.next;
};

let swapLinkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
};

console.log(swapPairs(swapLinkedList));
