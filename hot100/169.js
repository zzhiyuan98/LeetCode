/*
169. 多数元素

给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

const majorityElement = nums => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

// 3
const nums = [3,2,3];
console.log(majorityElement(nums));
