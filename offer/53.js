var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      let count = 1;
      left = mid;
      right = mid;
      while (left - 1 >= 0 && nums[mid] === nums[left - 1]) {
        left--;
        count++;
      }
      while (right + 1 < nums.length && nums[mid] === nums[right + 1]) {
        right++;
        count++;
      }
      return count;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  return 0;
};
