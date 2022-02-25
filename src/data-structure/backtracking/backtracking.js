let perm = (arr, permutation = [], answer = []) => {
  if (arr.length === 0) {
    answer.push([...permutation]);
  }

  for (let i = 0; i < arr.length; i++) {
    permutation.push(arr[i]);
    let filterArr = arr.filter((x, index) => index != i);
    perm(filterArr, permutation, answer);
    permutation.pop();
  }

  return answer;
};

let perm1 = nums => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const prefix = nums[i];
    const remainingNums = [...nums];
    remainingNums.splice(i, 1);
    const suffixes = perm1(remainingNums);
    if (suffixes.length) {
      for (const v of suffixes) {
        v.unshift(prefix);
        result.push(v);
      }
    } else {
      result.push([prefix]);
    }
  }
  return result;
};

console.log(perm1(['a', 'b', 'c', 'd']));

var permuteUnique = function(nums, permutation = [], answer = [], map = {}) {
  if (nums.length === 0) {
    let str = [...permutation].join('');
    if (!map[str]) {
      map[str] = 1;
      answer.push([...permutation]);
    }
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    permutation.push(nums[i]);
    let filterArr = nums.filter((x, index) => index != i);
    permuteUnique(filterArr, permutation, answer, map);
    permutation.pop();
  }
  return answer;
};

console.log(permuteUnique([1, 1, 2]));

var getPermutation = function(n, k) {
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  let total = 0;
  const traverse = (arr, permutation = []) => {
    if (arr.length === 0) {
      total++;
      if (total === k) {
        return [...permutation];
      }
    }

    for (let i = 0; i < arr.length; i++) {
      permutation.push(arr[i]);
      let filterArr = arr.filter((x, index) => index != i);
      let test = traverse(filterArr, permutation);
      if (test) {
        return test;
      }
      permutation.pop();
    }
  };

  return traverse(nums).join('');
};

console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(3, 1));

var exist = function(board, word) {
  const right = (i, j, word) => {
    if (word.length === 1 && word[0] === board[i][j]) {
      return true;
    } else {
      return right(i, j + 1, word.slice(1));
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (word[0] === board[i][j]) {
        let rightAns = right(i, j + 1, word.slice(1));
        if (rightAns) {
          return rightAns;
        }
      }
    }
  }
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ],
    'ABC'
  )
);

var sortColors = function(nums) {
  let maps = {};
  for (let i = 0; i < nums.length; i++) {
    maps[nums[i]] = maps[nums[i]] ? maps[nums[i]] + 1 : 1;
  }

  let count = 0;
  for (const item in maps) {
    for (let i = count; i < count + maps[item]; i++) {
      nums[i] = Number(item);
    }
    count += maps[item];
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([0]));
console.log(sortColors([1]));

var topKFrequent = function(nums, k) {};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

var findKthLargest = function(nums, k) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

var lengthOfLongestSubstring = function(s) {
  let maxLen = Number.MIN_SAFE_INTEGER;
  let currentStr = '';
  for (const item of s) {
    const idx = currentStr.indexOf(item);
    if (idx >= 0) currentStr = currentStr.slice(idx + 1);

    currentStr += item;
    // maxLen = Math.max(maxLen, currentStr.length);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

var pathSum = function(root, targetSum) {
  let arr = [];
  let stack = [];

  const traverse = (root, sum, level) => {
    // if (root.left === null && root.right === null) {
    //   stack.pop();
    // }

    stack.push(root.val);
    if (sum + root.val === targetSum) {
      arr.push(stack);
    }

    console.log(level);
    console.log(stack);
    if (root.left) traverse(root.left, sum, level + 1);
    if (root.right) traverse(root.right, sum, level + 1);
  };

  traverse(root, 0, 1);
};

const pathSumDFS = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null }
    },
    right: null
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      left: { val: 5, left: null, right: null },
      right: { val: 1, left: null, right: null }
    }
  }
};

console.log(pathSum(pathSumDFS, 22));

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var flatten = function(root) {
  let dummy = new TreeNode(0);
  let curr = dummy;
  const traverse = root => {
    if (!root) return;

    curr.right = new TreeNode(root.val);
    curr = curr.right;

    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  };

  traverse(root);
  return dummy.right;
};

const flatternListTree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: { val: 4, left: null, right: null }
  },
  right: { val: 5, left: null, right: { val: 6, left: null, right: null } }
};

console.log(JSON.stringify(flatten(flatternListTree)));

var isBalanced = function(root) {
  let res = true;
  const go = root => {
    if (!root) return 0;
    let left = go(root.left);
    let right = go(root.right);
    if (left - right > 1 || right - left > 1) {
      res = false;
    }

    return left > right ? left : right + 1;
  };
  go(root);
  return res;
};

console.log(
  isBalanced({
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: { val: 8, left: null, right: null }, right: null },
      right: { val: 5, left: null, right: null }
    },
    right: { val: 3, left: { val: 6, left: null, right: null }, right: null }
  })
);
