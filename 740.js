const deleteAndEarn = nums => {
  const counter = {};
  nums.forEach(num => {
    if (counter[num]) counter[num]++;
    else counter[num] = 1;
  });
  const newNums = nums.filter((num, i) => nums.findIndex(e => e === num) === i).sort((a, b) => a - b);

  const getWeight = idx => counter[newNums[idx]] * newNums[idx];
  let first = getWeight(0);
  if (newNums.length === 1) return first;
  let second = newNums[1] - newNums[0] === 1 ? Math.max(getWeight(0), getWeight(1)) : getWeight(0) + getWeight(1);
  if (newNums.length === 2) return second;
  for (let i = 2; i < newNums.length; i++) {
    const temp = second;
    second = newNums[i] - newNums[i - 1] === 1 ? Math.max(first + getWeight(i), second): second + getWeight(i);
    first = temp;
  }
  return second;
};

const nums = [1,1,1];
console.log(deleteAndEarn(nums));
