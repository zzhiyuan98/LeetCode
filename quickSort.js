const partition = (nums, low, high) => {
  const pivot = nums[low];
  let left = low;
  let right = high;
  while (left < right) {
    while (left < right && nums[right] > pivot) {
      right--
    }
    // right 指向从右往左第一个小于等于 pivot 的值
    nums[left] = nums[right];
    while (left < right && nums[left] <= pivot) {
      left++;
    }
    // left 指向从左往右第一个大于 pivot 的值
    nums[right] = nums[left];
  }
  nums[left] = pivot;
  return left;
};

const sort = nums => {
  const quickSort = (nums, low, high) => {
    if (low < high) {
      const index = partition(nums, low, high);
      quickSort(nums, low, index - 1);
      quickSort(nums, index + 1, high);
    }
    return nums;
  };
  return quickSort(nums, 0, nums.length - 1);
};

const nums = [4,-1,2,7,9,3,5];
console.log(sort(nums));
