import PQ from "../utils/PQ.js";

var nthUglyNumber = function(n) {
  const minHeap = new PQ((a, b) => a < b);
  const set = new Set();
  const factors = [2,3,5];
  minHeap.insert(1);
  set.add(1);
  let res;
  for (let i = 1; i <= n; i++) {
    res = minHeap.extractMax();
    for (const factor of factors) {
      const product = factor * res;
      if (!set.has(product)) {
        minHeap.insert(product);
        set.add(product);
      }
    }
  }
  return res;
};

const n = 10;
console.log(nthUglyNumber(n));
