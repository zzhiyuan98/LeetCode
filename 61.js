const isStraight = nums => {
  nums.sort((a, b) => a - b);
  const getNumZeroes = nums => {
    let count = 0;
    nums.forEach(num => {
      if (num === 0) count++;
    });
    return count;
  }
  let numJokers = getNumZeroes(nums);
  for (let i = numJokers + 1; i < nums.length; i++) {
    const difference = nums[i] - nums[i - 1];
    if (difference === 0) return false;
    if (difference === 1) continue;
    if (difference - 1 > numJokers) return false;
    numJokers -= difference - 1;
  }
  return true;
};

console.log(isStraight([10, 11, 0, 12, 6]));
