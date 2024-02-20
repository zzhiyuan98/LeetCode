/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const n = height.length;
  const leftMax = Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }
  const rightMax = Array(n).fill(0);
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (leftMax[i] > height[i] && rightMax[i] > height[i]) {
      sum += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
  }
  return sum;
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));
