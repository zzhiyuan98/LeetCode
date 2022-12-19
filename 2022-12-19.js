/* 1971. 寻找图中是否存在路径 */

const validPath = (n, edges, source, destination) => {
  const adj = new Array(n).fill(0).map(() => new Array());
  for (const edge of edges) {
    const x = edge[0], y = edge[1];
    adj[x].push(y);
    adj[y].push(x);
  }
  const visited = new Array(n).fill(false);
  const queue = [source];
  visited[source] = true;
  while (queue.length) {
    const vertex = queue.shift();
    if (vertex === destination) {
      break;
    }
    for (const next of adj[vertex]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  }
  return visited[destination];
};
