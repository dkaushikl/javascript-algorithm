const maxProfit = prices => {
  let profit = 0;
  let holdIndex = 0;

  for (let i = 0; i < prices.length; i++) {
    if (
      (i === prices.length - 1 && prices[holdIndex] < prices[i]) ||
      prices[i] > prices[i + 1]
    ) {
      console.log(i);
      profit += prices[i] - prices[holdIndex];
      console.log(profit);
      holdIndex = i;
    } else {
      if (prices[i] < prices[holdIndex]) {
        holdIndex = i;
      }
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
