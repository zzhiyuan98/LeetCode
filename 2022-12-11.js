/* 1827. 最少操作使数组递增 */

const minOperations = nums => {
  let count = 0;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= prev) {
      count += prev - nums[i] + 1;
      prev = prev + 1;
    }
    else prev = nums[i];
  }
  return count;
};
