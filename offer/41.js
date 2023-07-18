import PQ from "../utils/PQ.js";

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.minHeap = new PQ((a, b) => a < b); // 存储较大的一半元素
  this.maxHeap = new PQ((a, b) => a > b); // 存储较小的一半元素
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (this.minHeap.size !== this.maxHeap.size) {
    this.minHeap.insert(num);
    this.maxHeap.insert(this.minHeap.extractMax());
  }
  else {
    this.maxHeap.insert(num);
    this.minHeap.insert(this.maxHeap.extractMax());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.minHeap.size === this.maxHeap.size) {
    return (this.minHeap.getMax() + this.maxHeap.getMax()) / 2;
  }
  return this.minHeap.getMax();
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
*/
