export class StackRecursive {
  data = [];
  push = num => {
    this.data.push(num);
  };

  pop = () => {
    this.data.pop();
  };

  // reverse Number
  reverse = () => {
    if (this.data.length <= 0) return;

    const reversedStack = [];
    const copyStackArr = [...this.data];

    const reverseStack = (arr, n) => {
      if (n <= 0) return reversedStack;
      reversedStack.push(arr.pop());
      reverseStack(arr, arr.length);
    };

    reverseStack(copyStackArr, copyStackArr.length);
    return reversedStack;
  };

  reverseString = s => {
    if (!s || s.length <= 0) return '';

    const stack = [];
    const reverseStringStack = (s1: string, n: number) => {
      if (n <= 0) return;
      stack.push(s1[s1.length - 1]);

      s1 = s1.substring(0, s1.length - 1);
      reverseStringStack(s1, s1.length);
    };

    reverseStringStack(s, s.length);
    return stack.join('');
  };

  sort = (arr: number[]) => {
    if (arr.length <= 0) return [];

    const sortedArr = [];

    const pushInOldArr = (val: number, arr1: number[]) => {
      if (sortedArr.length === 0 || sortedArr[sortedArr.length - 1] <= val) {
        sortedArr.push(val);
        return arr1;
      }

      if (val < sortedArr[sortedArr.length - 1]) {
        arr1.push(sortedArr.pop());
        pushInOldArr(val, arr1);
      }
    };

    const sortStack = (arr1: number[]) => {
      if (arr1.length <= 0) return;

      const val = arr.pop();
      if (sortedArr[sortedArr.length - 1] <= val) {
        sortedArr.push(val);
        sortStack(arr1);
      } else {
        pushInOldArr(val, arr1);
        sortStack(arr1);
      }
    };

    sortedArr.push(arr.pop());
    sortStack(arr);
    return sortedArr;
  };
}

const stack = new StackRecursive();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.reverse());
console.log(stack.reverseString('GeeksQuiz'));
console.log(stack.sort([34, 3, 31, 98, 92, 23]));
console.log(stack.sort([30, -5, 18, 14, -3]));
console.log(stack.sort([0, 0, 0, 1]));
