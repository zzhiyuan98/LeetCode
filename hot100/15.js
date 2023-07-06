const threeSum = nums => {
  nums.sort();
  const twoSum = (target, start, end = nums.length - 1) => {
    const set = new Set();
    const recorded = new Set();
    const res = [];
    for (let i = start; i <= end; i++) {
      const num = nums[i];
      if (set.has(target - num)) {
        if (!recorded.has(num) && !recorded.has(target - num)) res.push([num, target - num]);
        recorded.add(num);
        recorded.add(target - num);
      }
      set.add(num);
    }
    return res;
  };
  const res = [];
  const recorded = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    if (recorded.has(num)) continue;
    const two = twoSum(-num, i + 1);
    if (two.length !== 0) {
      for (const ele of two) {
        ele.push(num);
        res.push(ele);
      }
      recorded.add(num);
    }
  }
  return res;
};

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));
