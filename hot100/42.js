/*
42. 接雨水

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
*/

// 按行求 O(maxHeight * n) O(1)
const trap = height => {
  const max = Math.max(...height);
  let count = 0;
  for (let i = 1; i <= max; i++) {
    let sum = undefined;
    for (let j = 0; j < height.length; j++) {
      // 柱子高度覆盖目标高度
      if (height[j] >= i) {
        // 启动计数器
        if (sum === undefined) {
          sum = 0;
        }
        // 计入总数，重制计数器
        else {
          count += sum;
          sum = 0;
        }
      }
      // 柱子高度小于目标高度
      else {
        if (Number.isInteger(sum)) {
          sum += 1;
        }
      }
    }
  }
  return count;
};

// 按列求 O(n^2) O(1)
const trap1 = height => {
  let sum = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let maxLeft = -Infinity;
    for (let j = i - 1; j >= 0; j--) {
      maxLeft = Math.max(maxLeft, height[j]);
    }
    let maxRight = -Infinity;
    for (let j = i + 1; j < height.length; j++) {
      maxRight = Math.max(maxRight, height[j]);
    }
    const min = Math.min(maxLeft, maxRight);
    if (min > height[i]) {
      sum += min - height[i];
    }
  }
  return sum;
};

// 动态规划 O(n) O(n)
const trap2 = height => {
  // maxLeft[i] 表示 i 左侧最高的高度（不包括 i），则 maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1])
  // maxRight[i] 同上，maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
  const maxLeft = [];
  maxLeft[0] = -Infinity;
  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
  }
  const maxRight = [];
  maxRight[height.length - 1] = -Infinity;
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
  }
  let sum = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const min = Math.min(maxLeft[i], maxRight[i]);
    if (min > height[i]) {
      sum += min - height[i];
    }
  }
  return sum;
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap2(height));
