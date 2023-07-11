/*
227. 基本计算器 II

给你一个字符串表达式 s，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

你可以假设给定的表达式总是有效的。所有中间结果将在 [-2^31, 2^31 - 1] 的范围内。

注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval()。
 */

const isDigit = char => char >= "0" && char <= "9";

var calculate = function(s) {
  const str = s.trim();
  const stack = [];
  let num = 0;
  let preSign = "+";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isDigit(char)) {
      num = num * 10 + (char - "0");
    }
    if (["+", "-", "*", "/"].includes(char) || i === str.length - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(parseInt((stack.pop() / num).toString()));
      }
      preSign = char;
      num = 0;
    }
  }
  return stack.reduce((prev,curr) => prev + curr, 0);
};

// 13
const s = "14-3/2";
console.log(calculate(s));
