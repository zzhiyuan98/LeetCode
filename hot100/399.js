/*
399. 除法求值

给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i]。每个 Ai 或 Bi 是一个表示单个变量的字符串。

另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。

返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。

注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。
*/

function UnionFind(n) {
  // 一开始，所有元素自成一个集合（父节点为自己）
  this.parent = new Array(n).fill(0).map((_, index) => index);
  // 权值均为 1（任何数除以本身商为 1）
  this.weight = new Array(n).fill(1);
}

// 查找根节点 + 路径压缩
UnionFind.prototype.find = function(x) {
  if (x !== this.parent[x]) {
    const origin = this.parent[x];
    this.parent[x] = this.find(this.parent[x]);
    this.weight[x] *= this.weight[origin];
  }
  return this.parent[x];
};

// 合并
UnionFind.prototype.union = function(x, y, value) {
  const rootX = this.find(x);
  const rootY = this.find(y);
  if (rootX === rootY) return;
  this.parent[rootX] = rootY;
  // 两条路径 (x -> y -> rootY, x -> rootX -> rootY) 有向边的权值乘积相等
  this.weight[rootX] = this.weight[y] * value / this.weight[x];
};

const calcEquation = (equations, values, queries) => {
  const n = equations.length;
  /* 建立映射关系 */
  const map = new Map();
  let id = 0;
  for (let i = 0; i < n; i++) {
    const [a, b] = equations[i];
    if (!map.has(a)) map.set(a, id++);
    if (!map.has(b)) map.set(b, id++);
  }

  /* 初始化并查集并执行合并 */
  const unionFind = new UnionFind(id);
  for (let i = 0; i < n; i++) {
    const [a, b] = equations[i];
    unionFind.union(map.get(a), map.get(b), values[i]);
  }

  /* 查询根节点，如果在一个集合（根节点相同），则权值比值为结果 */
  const ans = new Array(queries.length).fill(-1);
  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];
    if (map.has(a) && map.has(b)) {
      const id1 = map.get(a);
      const id2 = map.get(b);
      const root1 = unionFind.find(id1);
      const root2 = unionFind.find(id2);
      if (root1 === root2) {
        ans[i] = unionFind.weight[id1] / unionFind.weight[id2];
      }
    }
  }
  return ans;
};

// expected output: [360.0,0.00833,20.0,1.0,-1.0,-1.0]
const equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]]
const values = [3.0,4.0,5.0,6.0]
const queries = [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]
console.log(calcEquation(equations, values, queries));
