const numTrees = n => {
  const f = [];
  f[0] = 1;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += f[j] * f[i - 1 - j];
    }
    f[i] = sum;
  }
  return f[n];
};

const n = 6;
console.log(numTrees(n));
