/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.queue = [];
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1;
  const index = this.queue.findIndex(e => e === key);
  this.queue.splice(index, 1);
  this.queue.push(key);
  return this.map.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.set(key, value);
    const index = this.queue.findIndex(e => e === key);
    this.queue.splice(index, 1);
    this.queue.push(key);
  }
  else {
    this.map.set(key, value);
    this.queue.push(key);
    if (this.queue.length > this.capacity) {
      const deletedKey = this.queue.shift();
      this.map.delete(deletedKey);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
