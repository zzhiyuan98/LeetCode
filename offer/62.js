var lastRemaining = function(n, m) {
  // 返回最后剩下的元素在初始数组中的下标
  const f = (n, m) => {
    if (n === 1) {
      return 0;
    }
    const x = f(n - 1, m);
    return (m + x) % n;
  };
  return f(n, m);
};

const n = 5;
const m = 3;
console.log(lastRemaining(n, m));
