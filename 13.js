const movingCount = (m, n, k) => {
  const getSum = number => {
    if (number < 10) return number;
    return number % 10 + Math.floor(number / 10);
  };
  const check = (i, j) => getSum(i) + getSum(j) <= k;

  const visited = Array.from(Array(m), () => new Array(n));
  const queue = [[0, 0]];
  let count = 0;
  while (queue.length) {
    const [i, j] = queue.shift();
    if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || !check(i, j)) continue;
    visited[i][j] = true;
    count++;
    queue.push([i, j + 1], [i + 1, j]);
  }
  return count;
};

// expected output: 45
console.log(movingCount(20, 23, 8));
