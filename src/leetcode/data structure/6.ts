const maxProfit = prices => {
  let minPrice = prices[0];
  let maxPrice = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice);
    maxPrice = Math.max(prices[i] - minPrice, maxPrice);
  }

  return maxPrice;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
