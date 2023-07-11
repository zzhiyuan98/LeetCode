/*
93. 复原 IP 地址

有效 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是有效IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你不能重新排序或删除 s 中的任何数字。你可以按任何顺序返回答案。
 */

var restoreIpAddresses = function(s) {
  const ans = [];
  const isValidSegment = s => {
    if (s[0] === "0" && s.length > 1) {
      return false;
    }
    const num = parseInt(s);
    return num >= 0 && num <= 255;
  };
  const dfs = (begin, depth, path) => {
    if (begin >= s.length) {
      return;
    }
    if (depth === 3) {
      const rest = s.substring(begin);
      if (isValidSegment(rest)) {
        ans.push(path.concat(rest).join("."));
      }
      return;
    }
    for (let len = 1; len <= 3; len++) {
      const str = s.substring(begin, begin + len);
      if (isValidSegment(str)) {
        dfs(begin + len, depth + 1, path.concat(s.substring(begin, begin + len)));
      }
    }
  };
  dfs(0, 0, []);
  return ans;
};

// expected output: ["255.255.11.135","255.255.111.35"]
const s = "25525511135";
console.log(restoreIpAddresses(s));
