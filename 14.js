const cuttingRope = n => {
  /*
    f(2) = 1 or 2
    f(3) = 2 or 3
    f(4) = 4
    f(5) = 6
    f(6) = 9
    f(7) = 12
    f(8) = 18
    f(9) = 27
    f(10) = 36
   */
  if (n <= 3) return n - 1;
  const f = [];
  f[2] = 2;
  f[3] = 3;
  for (let i = 4; i <= n; i++) {
    let max = -Infinity;
    for (let j = i - 1; j >= 2; j--) {
      max = Math.max(max, f[j] * (i - j));
    }
    f[i] = max;
  }
  return f[n];
};

// expected output: 36
const n = 10;
console.log(cuttingRope(n));
