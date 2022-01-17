const addTwoNumbers = function(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let carry = 0;
  let finalSum = '';
  while (current1 || current2) {
    let first = 0;
    let second = 0;

    if (current1) first = current1.val;
    if (current2) second = current2.val;

    let sum = first + second + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum === 10 ? 0 : sum % 10;
    } else {
      carry = 0;
    }

    finalSum = finalSum + sum;

    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }

  if (carry === 1) {
    finalSum = finalSum + 1;
  }

  let head = null;
  let i = finalSum.length - 1;

  while (i >= 0) {
    head = {
      val: finalSum[i],
      next: head
    };

    i--;
  }

  return head;
};

const linkedList1 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: null
            }
          }
        }
      }
    }
  }
};

const linkedList2 = {
  val: 9,
  next: {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: null
      }
    }
  }
};

console.log(JSON.stringify(addTwoNumbers(linkedList1, linkedList2)));
