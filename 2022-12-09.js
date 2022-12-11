/* 1780. 判断一个数字是否可以表示成三的幂的和 */

const getBounds = n => {
  let lowerBound = undefined;
  let upperBound = undefined;
  let i = 0;
  while (true) {
    lowerBound = Math.pow(3, i);
    upperBound = Math.pow(3, i + 1);
    if (n > lowerBound && n <= upperBound) return { lowerBound, upperBound };
    i++;
  }
};

const checkPowersOfThree = n => {
  if (n === Math.pow(3, 0)) return true;
  const { lowerBound, upperBound } = getBounds(n);
  if (n === upperBound) return true;
  if (n >= 2 * lowerBound) return false;
  return checkPowersOfThree(n - lowerBound);
};
