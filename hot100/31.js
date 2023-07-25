const nextPermutation = nums => {
  const n = nums.length;
  if (n === 1) {
    return nums;
  }
  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  // 从后向前查找第一个相邻升序列（i，i + 1)
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  // 从后向前查找第一个比 nums[i] 大的数，与之交换位置
  if (i >= 0) {
    let j = n - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }
    swap(i, j);
  }
  // 交换后 i 之后的数需要按升序排列（此前必然为降序）
  let left = i + 1; // 包含 i = -1 的边界情况
  let right = n - 1;
  while (left < right) {
    if (nums[left] > nums[right]) {
      swap(left, right);
    }
    left++;
    right--;
  }
  return nums;
};

const nums = [1];
console.log(nextPermutation(nums));
