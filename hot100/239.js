/*
239. 滑动窗口最大值

给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。
*/

import PriorityQueue from "../utils/PriorityQueue.js";

const maxSlidingWindow = (nums, k) => {
  const q = new PriorityQueue((a, b) => a[0] > b[0]);
  for (let i = 0; i < k; i++) {
    q.insert([nums[i], i])
  }
  const ans = [q.getMax()[0]];
  for (let i = k; i < nums.length; i++) {
    q.insert([nums[i], i]);
    while (q.getMax()[1] <= i - k) {
      q.extractMax();
    }
    ans.push(q.getMax()[0]);
  }
  return ans;
};

// expected output: [3,3,5,5,6,7]
const nums = [1,3,-1,-3,5,3,6,7];
const k = 3;
console.log(maxSlidingWindow(nums, k));
