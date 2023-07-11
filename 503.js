/*
503. 下一个更大元素 II

给定一个循环数组 nums（nums[nums.length - 1] 的下一个元素是 nums[0]），返回 nums 中每个元素的下一个更大元素。

数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。
 */

var nextGreaterElements = function(nums) {
  const n = nums.length;
  const stack = [];
  const top = () => stack[stack.length - 1];
  const ans = new Array(n).fill(-1);
  for (let i = 0; i < 2 * n - 1; i++) {
    while (stack.length && nums[i % n] > nums[top()]) {
      ans[stack.pop()] = nums[i % n];
    }
    stack.push(i % n);
  }
  return ans;
};

// [2,-1,2]
const nums = [1,2,1];
console.log(nextGreaterElements(nums));
