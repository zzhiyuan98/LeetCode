const getSum = num => {
  let sum = 0;
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
};

var movingCount = function(m, n, k) {
  const visited = Array.from(Array(m), () => new Array(n).fill(false));
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  const canMove = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return false;
    }
    return getSum(i) + getSum(j) <= k;
  }
  let count = 0;
  const dfs = (i, j) => {
    count++;
    visited[i][j] = true;
    for (const d of directions) {
      const x = i + d[0];
      const y = j + d[1];
      if (canMove(x, y) && !visited[x][y]) {
        dfs(x, y);
      }
    }
  };
  dfs(0, 0);
  return count;
};

console.log(movingCount(2,3,1));
