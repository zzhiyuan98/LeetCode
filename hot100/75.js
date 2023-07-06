/*
 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。
 */
const sortColors = nums => {
  // 数组里只包含 0 1 2，升序排序，原地
  let left = 0;
  let right = nums.length - 1;
  let endOfZero = 0;
  const swap = (idx1, idx2) => {
    const temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
  };
  while (left <= right) {
    switch (nums[left]) {
      case 0:
        swap(left, endOfZero);
        left++;
        endOfZero++;
        break;
      case 1:
        left++;
        break;
      default:
        swap(left, right);
        right--;
    }
  }
  return nums;
};

const nums = [2,0,1];
console.log(sortColors(nums));
