var permutation = function(s) {
  const ans = [];
  const n = s.length;
  const str = Array.from(s).sort().join("");
  const visited = new Array(n).fill(false);
  const backtrack = output => {
    if (output.length === n) {
      ans.push(output);
    }
    for (let i = 0; i < n; i++) {
      if (visited[i] || (i > 0 && str[i] === str[i - 1] && !visited[i - 1])) {
        continue;
      }
      visited[i] = true;
      backtrack(output + str[i]);
      visited[i] = false;
    }
  };
  backtrack("");
  return ans;
};

const s = "aab";
console.log(permutation(s));
