const findUnsortedSubarray = nums => {
  // 子数组的特征：
  // 1. 子数组左侧所有元素均按升序排列，且左侧 max 小于子数组内所有元素
  // 2. 子数组右侧所有元素均按升序排列，且右侧 min 大于子数组内所有元素
  const n = nums.length;
  let max = -Infinity;
  let end = -1;
  let min = Infinity;
  let begin = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] >= max) {
      max = nums[i];
    }
    else {
      end = i;
    }
    if (nums[n - 1 - i] <= min) {
      min = nums[n - 1 - i];
    }
    else {
      begin = n - 1 - i;
    }
  }
  return end === -1 ? 0 : end - begin + 1;
};

const nums = [1,2,3,3,3];
console.log(findUnsortedSubarray(nums));
