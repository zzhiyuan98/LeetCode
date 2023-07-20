import PQ from "../utils/PQ.js";

const maxSlidingWindow = function(nums, k) {
  const heap = new PQ((a, b) => a[0] > b[0]);
  for (let i = 0; i < k - 1; i++) {
    heap.insert([nums[i], i]);
  }
  const ans = [];
  let left = 0;
  let right = k - 1;
  while (right < nums.length) {
    heap.insert([nums[right], right]);
    while (heap.getMax()[1] < left) {
      heap.extractMax();
    }
    ans.push(heap.getMax()[0]);
    right++;
    left++;
  }
  return ans;
};

const nums = [1,3,-1,-3,5,3,6,7];
const k = 3;
console.log(maxSlidingWindow(nums, k));
