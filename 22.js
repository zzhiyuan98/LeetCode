const generateParenthesis = n => {
  const res = [];
  const dfs = (str, left, right) => {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }
    if (left === right) return dfs(str + "(", left - 1, right);
    if (left < right) {
      if (left > 0) dfs(str + "(", left - 1, right);
      dfs(str + ")", left, right - 1);
    }
  };
  dfs("", n, n);
  return res;
};

// expected output: ["((()))","(()())","(())()","()(())","()()()"]
const n = 3;
console.log(generateParenthesis(n));
