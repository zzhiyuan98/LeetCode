var exchange = function(nums) {
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    while (left < right && nums[left] % 2 === 1) {
      left++;
    }
    while (left < right && nums[right] % 2 === 0) {
      right--;
    }
    if (left < right) {
      swap(left, right);
      left++;
      right--;
    }
  }
  return nums;
};
