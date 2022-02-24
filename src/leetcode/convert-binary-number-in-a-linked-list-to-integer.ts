var getDecimalValue = function(head) {
  console.log(head);
  let str = '';
  let curr = head;
  while (curr && curr.next) {
    str += curr.val;
    curr = curr.next;
  }
  return parseInt(str, 2);
};

console.log(getDecimalValue([1, 0, 1]));
