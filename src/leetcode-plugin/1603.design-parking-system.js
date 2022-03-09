/*
 * @lc app=leetcode id=1603 lang=javascript
 *
 * [1603] Design Parking System
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.arr = [big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (carType === 1 && this.arr[0] > 0) {
    this.arr[0] = this.arr[0] - 1;
    return true;
  }

  if (carType === 2 && this.arr[1] > 0) {
    this.arr[1] = this.arr[1] - 1;
    return true;
  }

  if (carType === 3 && this.arr[2] > 0) {
    this.arr[2] = this.arr[2] - 1;
    return true;
  }

  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end

var parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1)); // return true because there is 1 available slot for a big car
console.log(parkingSystem.addCar(2)); // return true because there is 1 available slot for a medium car
console.log(parkingSystem.addCar(3)); // return false because there is no available slot for a small car
console.log(parkingSystem.addCar(1)); // return false because there is no available slot for a big car. It is already occupied.
