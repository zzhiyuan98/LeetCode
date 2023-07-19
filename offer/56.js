var singleNumbers = function(nums) {
  let x = 0;
  for (const num of nums) {
    x ^= num;
  }
  // x = a ^ b -> ans = [a, b]
  let a = 0;
  let b = 0;
  let div = 1;
  while ((div & x) === 0) {
    div <<= 1;
  }
  for (const num of nums) {
    if (div & num) {
      a ^= num;
    }
    else {
      b ^= num;
    }
  }
  return [a, b];
};

const nums = [1,2,5,2];
console.log(singleNumbers(nums));
