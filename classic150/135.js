/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const n = ratings.length;
  const left = Array(n).fill(0);
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 1;
    }
  }
  let right = 0;
  let res = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (i < n - 1 && ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }
    res += Math.max(right, left[i]);
  }
  return res;
};

const ratings = [1,0,2];
console.log(candy(ratings));
