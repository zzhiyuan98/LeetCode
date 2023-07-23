const isStraight = nums => {
  const set = new Set();
  let min = 14;
  let max = 0;
  for (const num of nums) {
    if (num === 0) {
      continue;
    }
    if (set.has(num)) {
      return false;
    }
    set.add(num);
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  return max - min < 5;
};

var isStraight1 = function(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let start = 0;
  while (nums[start] === 0) {
    count++;
    start++;
  }
  let prev = nums[start];
  for (let i = start + 1; i < nums.length; i++) {
    const curr = nums[i];
    while (curr !== prev + 1) {
      if (count === 0) {
        return false;
      }
      count--;
      prev = prev + 1;
    }
    prev = curr;
  }
  return true;
};

const nums = [0,0,2,2,5];
console.log(isStraight(nums));
