/*
150. 逆波兰表达式求值

给你一个字符串数组 tokens，表示一个根据逆波兰表示法表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。

注意：

有效的算符为 '+'、'-'、'*' 和 '/'。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是向零截断。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。
 */

var evalRPN = function(tokens) {
  const stack = [];
  for (const token of tokens) {
    if (Number.isInteger(parseInt(token))) {
      stack.push(parseInt(token));
      continue;
    }
    const n1 = stack.pop();
    const n2 = stack.pop();
    switch (token) {
      case "+":
        stack.push(n1 + n2);
        break;
      case "-":
        stack.push(n2 - n1);
        break;
      case "*":
        stack.push(n1 * n2);
        break;
      default:
        stack.push(parseInt((n2 / n1).toString()));
    }
  }
  return stack[0];
};

// 22
const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(tokens));
