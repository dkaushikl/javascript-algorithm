/*
 * @lc app=leetcode id=706 lang=javascript
 *
 * [706] Design HashMap
 */

// @lc code=start

var MyHashMap = function() {
  this.map = [];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  const arr = this.map.filter(x => x[0] === key);
  if (arr.length > 0) {
    arr[0][1] = value;
  } else {
    this.map.push([key, value]);
  }
  console.log(this.map);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  const arr = this.map.filter(x => x[0] === key);
  if (arr.length > 0) {
    return arr[0][1];
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  const idx = this.map.findIndex(x => x[0] === key);
  if (idx !== -1) {
    let val = this.map[idx][1];
    this.map.splice(idx, 1);
    return val;
  } else {
    return -1;
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end`

var myHashMap = new MyHashMap();
console.log(myHashMap.put(1, 1)); // The map is now [[1,1]]
console.log(myHashMap.put(2, 2)); // The map is now [[1,1], [2,2]]
console.log(myHashMap.map);
console.log(myHashMap.get(1)); // return 1, The map is now [[1,1], [2,2]]
console.log(myHashMap.get(3)); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
console.log(myHashMap.put(2, 1)); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
console.log(myHashMap.map);
console.log(myHashMap.get(2)); // return 1, The map is now [[1,1], [2,1]]
console.log(myHashMap.map);
console.log(myHashMap.remove(2)); // remove the mapping for 2, The map is now [[1,1]]
console.log(myHashMap.map);
console.log(myHashMap.get(2)); // return -1 (i.e., not found), The map is now [[1,1]]
