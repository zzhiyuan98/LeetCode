var RandomizedSet = function() {
  this.nums = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) {
    return false;
  }
  this.map.set(val, this.nums.length);
  this.nums.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.map.has(val)) {
    const index = this.map.get(val);
    this.nums[index] = this.nums[this.nums.length - 1];
    this.map.set(this.nums[index], index);
    this.map.delete(val);
    this.nums.pop();
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
