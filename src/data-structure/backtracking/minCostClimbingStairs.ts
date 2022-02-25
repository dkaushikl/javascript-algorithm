const minCostClimbingStairs = cost => {
  console.log(cost);
  if (cost.length === 2) return Math.min(cost[0], cost[1]);
  if (cost.length === 1) return cost[0];
  if (cost.length < 1) return 0;

  return Math.min(
    minCostClimbingStairs(cost.slice(1)),
    minCostClimbingStairs(cost.slice(2))
  );
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
