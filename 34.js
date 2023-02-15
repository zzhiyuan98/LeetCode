var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num === target) {
      left = mid;
      right = mid;
      while (left > 0 && nums[left - 1] === target) {
        left--;
      }
      while (right < nums.length - 1 && nums[right + 1] === target) {
        right++;
      }
      return [left, right];

    }
    if (num < target) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};
