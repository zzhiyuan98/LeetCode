const nextPermutation = nums => {
  const getNum = i => nums[i];
  const swap = (x, y) => {
    const temp = getNum(x);
    nums[x] = getNum(y);
    nums[y] = temp;
  };
  /*
    从数组末尾开始，找到第一个组合 i, j (i < j) 使得 nums[i] < nums[j]
    从数组末尾到 j，找到第一个比 nums[i] 小的数，与之交换位置
    返回 j 的位置
  */
  const helper = () => {
    let right = nums.length - 1;
    while (right > 0) {
      const cur = getNum(right);
      const prev = getNum(right - 1);
      if (cur > prev) {
        for (let i = nums.length - 1; i >= right; i--) {
          if (getNum(i) > prev) {
            swap(i, right - 1);
            return right;
          }
        }
      }
      right--;
    }
    return right;
  };
  const right = helper();
  // 从 j 开始到数组末尾，升序排列
  for (let i = right; i < nums.length; i++) {
    let min = getNum(i);
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (getNum(j) < min) {
        min = getNum(j);
        minIndex = j;
      }
    }
    swap(i, minIndex);
  }
  return nums;
};

const nums = [1 ,3, 2];
console.log(nextPermutation(nums));
