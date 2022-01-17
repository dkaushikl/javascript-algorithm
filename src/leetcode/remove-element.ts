const removeElements = function(head, val) {
  if (!head) return head;

  let current = head;

  while (current && current.next) {
    if (current.next.val === val) {
      current = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head.val === val ? head.next : head;
};
