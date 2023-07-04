/*
84. 柱状图中最大的矩形

给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1。

求在该柱状图中，能够勾勒出来的矩形的最大面积。
*/

// 暴力枚举求边界 O(N^2) O(1)
const largestRectangleArea = heights => {
  const n = heights.length;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    const height = heights[i];
    let left = i;
    while (left - 1 >= 0 && heights[left - 1] >= height) {
      left--;
    }
    let right = i;
    while (right + 1 < n && heights[right + 1] >= height) {
      right++;
    }
    const area = (right - left + 1) * height;
    max = Math.max(max, area);
  }
  return max;
};

// 单调栈 O(N) O(N)
const largestRectangleArea1 = heights => {
  const n = heights.length;
  let monoStack = [];
  const isEmpty = () => monoStack.length === 0;
  const getTop = () => monoStack[monoStack.length - 1];
  const left = [];
  for (let i = 0; i < n; i++) {
    while (!isEmpty() && heights[getTop()] >= heights[i]) {
      monoStack.pop();
    }
    left[i] = isEmpty() ? -1 : getTop();
    monoStack.push(i);
  }
  monoStack = [];
  const right = [];
  for (let i = n - 1; i >= 0; i--) {
    while (!isEmpty() && heights[getTop()] >= heights[i]) {
      monoStack.pop();
    }
    right[i] = isEmpty() ? n : getTop();
    monoStack.push(i);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, (right[i] - left[i] - 1) * heights[i]);
  }
  return ans;
};

// expected output: 10
const heights = [6,7,5,2,4,5,9,3];
console.log(largestRectangleArea1(heights));
