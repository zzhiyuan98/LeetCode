/*
283. 移动零

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意，必须在不复制数组的情况下原地对数组进行操作。
 */

var moveZeroes = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    nums[j] = nums[i];
    j++;
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
};
