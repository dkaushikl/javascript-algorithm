const jewelAndStone = (jewels = 'aA', stones = 'aAAbbbb') => {
  const jewel = {};

  for (const item of jewels) jewel[item] = 1;

  let count = 0;
  for (const stone of stones) if (jewel[stone]) count++;

  return count;
};

console.log(jewelAndStone());

const topKFrequent = (nums = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], k = 2) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }

  const sortArr = Object.entries(map).sort((a, b) => {
    return +b[1] - +a[1];
  });

  const result = [];
  for (let i = 0; i < k; i++) result.push(sortArr[i][0]);

  return result;
};

console.log(topKFrequent());

const singleNumber = (nums = [4, 1, 2, 1, 2]) => {
  let map = {};

  for (let i = 0; i < nums.length; i++)
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;

  for (const item of Object.entries(map)) {
    if (Number(item[1]) === 1) return item[0];
  }

  return 0;
};

console.log(singleNumber());
