// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// Time Complexity = o(n)
// Space Complexity = o(n)
function countMatches(items, ruleKey, ruleValue) {
  const checkValue = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
  let count = 0;

  for (const i of items) if (i[checkValue] === ruleValue) count += 1;

  console.log(count);
}

const items = [
  ['phone', 'blue', 'pixel'],
  ['computer', 'silver', 'lenovo'],
  ['phone', 'gold', 'iphone']
];
countMatches(items, 'color', 'silver');
countMatches(items, 'type', 'phone');
