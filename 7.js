/*
给你一个 32 位的有符号整数 x，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−2^31, 2^31 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 */

const check = (str, sign) => {
  const max = Math.pow(2, 31);
  const maxStr = max.toString();
  const maxLength = maxStr.length;
  if (str.length === maxLength) {
    if (sign === "-") {
      return str < maxStr;
    }
    return str < (max - 1).toString();

  }
  return str.length < maxLength;
};

const reverse = function(x) {
  const str = x.toString();
  const sign = str[0] === "-" ? "-" : "";
  const start = str[0] === "-" ? 1 : 0;
  let end = str.length;
  while (str.length > 1 && str[end - 1] === "0") {
    end--;
  }
  const res = Array.from(str.substring(start, end)).reverse().join("");
  return check(res, sign) ? parseInt(sign + res) : 0;
};

const x = 0;
console.log(reverse(x));