/* 1785. 构成特定和需要添加的最少元素 */

const minElements = (nums, limit, goal) => {
  const sum = nums.reduce((prev, number) => prev + number, 0);
  const diff = Math.abs(goal - sum);
  return Math.ceil(diff / limit);
};
