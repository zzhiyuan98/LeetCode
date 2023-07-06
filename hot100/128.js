/*
128. 最长连续序列

给定一个未排序的整数数组 nums，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */

const longestConsecutive = nums => {
  let max = 0;
  const set = new Set();
  nums.forEach(num => set.add(num));
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num - 1)) continue;
    let len = 1;
    let cur =  num + 1;
    while (set.has(cur)) {
      len++;
      cur++;
    }
    max = Math.max(max, len);
  }
  return max;
};

// O(n * log(n))
const longestConsecutive1 = nums => {
  if (nums.length === 0) return 0;
  nums.sort((a,b) => a - b);
  // 新的数字要么和旧的形成连续序列，要么新起一个
  // 定义 f[i] 为包含 nums[i] 的最长序列长度
  const f = [];
  f[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff === 1) f[i] = f[i - 1] + 1
    else if (diff === 0) f[i] = f[i - 1];
    else f[i] = 1;
  }
  return Math.max(...f);
};

const nums = [1,2,0,1];
console.log(longestConsecutive(nums));
