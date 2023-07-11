/*
962. 最大宽度坡

给定一个整数数组 A，坡是元组 (i, j)，其中 i < j 且 A[i] <= A[j]。这样的坡的宽度为 j - i。

找出 A 中的坡的最大宽度，如果不存在，返回 0。
 */

// 暴力 O(n^2)
const maxWidthRamp = nums => {
  const n = nums.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] >= nums[i]) {
        max = Math.max(max, j - i);
      }
    }
  }
  return max;
};

// 单调栈
const maxWidthRamp1 = nums => {
  const n = nums.length;
  const stack = [];
  let max = 0;
  const top = () => stack[stack.length - 1];
  for (let i = 0; i < n; i++) {
    if (!stack.length || nums[i] < nums[top()]) {
      stack.push(i);
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[i] >= nums[top()]) {
      max = Math.max(max, i - stack.pop());
    }
  }
  return max;
};

// 4
const nums = [6,0,8,2,1,5];
console.log(maxWidthRamp1(nums));
