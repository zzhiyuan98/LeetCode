/*
43. 字符串相乘

给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 */

const addStrings = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  const res = [];
  while (i >= 0 || j >= 0 || carry > 0) {
    const n1 = i >= 0 ? num1.charAt(i) - "0" : 0;
    const n2 = j >= 0 ? num2.charAt(j) - "0" : 0;
    const sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    res.push(sum % 10);
    i--;
    j--;
  }
  return res.reverse().join("");
};

var multiply = function(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  let sum = "0";
  for (let i = 0; i < num2.length; i++) {
    const n2 = num2.charAt(num2.length - 1 - i) - "0";
    // 补 0
    const temp = [];
    for (let j = 0; j < i; j++) {
      temp.push("0");
    }
    let carry = 0;
    for (let j = 0; j < num1.length || carry > 0; j++) {
      const n1 = j < num1.length ? num1.charAt(num1.length - 1 - j) - "0" : 0;
      const product = n1 * n2 + carry;
      carry = Math.floor(product / 10);
      temp.push((product % 10).toString());
    }
    sum = addStrings(sum, temp.reverse().join(""));
  }
  return sum;
};

// "56088"
const num1 = "123";
const num2 = "456";
console.log(multiply(num1, num2));
