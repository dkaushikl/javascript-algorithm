const hasCycle = head => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

// const head = {
//   val: 3,
//   next: {
//     val: 2,
//     next: {
//       val: 0,
//       next: {
//         val: -4,
//         next: null
//       }
//     }
//   }
// };

const head = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
};

console.log(hasCycle(head));
