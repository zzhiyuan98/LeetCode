var constructArr = function(a) {
  const n = a.length;
  if (n <= 1) {
    return [];
  }
  const left = [];
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * a[i - 1];
  }
  const right = [];
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * a[i + 1];
  }
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(left[i] * right[i]);
  }
  return ans;
};

const a = [1,2,3,4,5];
console.log(constructArr(a));
