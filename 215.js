import PQ from "./utils/PQ.js";

const partition = (nums, low, high) => {
  const pivot = nums[low];
  let left = low;
  let right = high;
  while (left < right) {
    while (left < right && nums[right] > pivot) {
      right--;
    }
    nums[left] = nums[right];
    while (left < right && nums[left] <= pivot) {
      left++;
    }
    nums[right] = nums[left];
  }
  nums[left] = pivot;
  return left;
};

const findKthLargest = (nums, k) => {
  const n = nums.length;
  const index = partition(nums, 0, n - 1);
  if (index === n - k) {
    return nums[index];
  }
  // 往右找
  if (index < n - k) {
    return findKthLargest(nums.slice(index + 1), k);
  }
  // 往左找
  return findKthLargest(nums.slice(0, index), k - n + index);
};

const findKthLargest1 = (nums, k) => {
  const maxHeap = new PQ((a, b) => a > b);
  for (const num of nums) {
    maxHeap.insert(num);
  }
  for (let i = 1; i < k; i++) {
    maxHeap.extractMax();
  }
  return maxHeap.getMax();
};

const nums = [2,1];
const k = 2;
console.log(findKthLargest(nums, k));
