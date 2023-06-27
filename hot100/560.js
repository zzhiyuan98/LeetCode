/*
560. 和为 K 的子数组

给你一个整数数组 nums 和一个整数 k，请你统计并返回该数组中和为 k 的连续子数组的个数。
*/

const subarraySum = (nums, k) => {
  const preSum = [];
  preSum[0] = 0;
  for (let i = 1; i <= nums.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (preSum[j] - preSum[i] === k) count++;
    }
  }
 return count;
};

/*
优化：不关心哪两项的前缀和之差等于 k，只关心等于 k 的前缀和之差出现了几次
*/

const subarraySumNew = (nums, k) => {
  const map = new Map();
  map.set(0, 1);
  let count = 0;
  let preSum = 0;
  for (const num of nums) {
    preSum += num;
    if (map.has(preSum - k)) {
      count += map.get(preSum - k);
    }
    const temp = map.has(preSum) ? map.get(preSum) + 1 : 1;
    map.set(preSum, temp);
  }
  return count;
};

const nums = [1,1,1];
const k = 2;
console.log(subarraySum(nums, k) === subarraySumNew(nums, k));
