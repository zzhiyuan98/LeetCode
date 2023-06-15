/*
347. 前 K 个高频元素

给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按任意顺序返回答案。
 */

const topKFrequent = (nums, k) => {
  const cnt = new Map();
  nums.forEach(num => {
    const count = cnt.has(num) ? cnt.get(num) + 1 : 1;
    cnt.set(num, count);
  });
  // min heap
};

// expected output: [1,2]
const nums = [1,1,1,2,2,3];
const k = 2;
console.log(topKFrequent(nums, k));
