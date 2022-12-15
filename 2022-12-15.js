/* 1945. 字符串转化后的各位数字之和 */

const strToNumArray = s => {
  const ans = [];
  const base = "a".charCodeAt() - 1;
  for (const char of s) {
    ans.push(char.charCodeAt() - base);
  }
  return ans;
};

const getLucky = (s, k) => {
  let str = strToNumArray(s).join("");
  let ans = undefined;
  let count = k;
  while (count) {
    ans = 0;
    for (const char of str) {
      ans += parseInt(char);
      str = ans.toString();
    }
    count--;
  }
  return ans;
};
