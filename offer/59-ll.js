var MaxQueue = function() {
  this.q = [];
  this.maxQ = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  return this.maxQ.length === 0 ? -1 : this.maxQ[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  while (this.maxQ.length && this.maxQ[this.maxQ.length - 1] < value) {
    this.maxQ.pop();
  }
  this.maxQ.push(value);
  this.q.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.q.length) {
    return -1;
  }
  const res = this.q.shift();
  if (res === this.max_value()) {
    this.maxQ.shift();
  }
  return res;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
*/
