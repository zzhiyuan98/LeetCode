/*
17. 电话号码的字母组合

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按任意顺序返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */
const letterCombinations = digits => {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "z", "y"],
  };
  if (digits === "") return [];
  let prev = map[digits[0]]; // dp = ["a", "b", "c"]
  for (let i = 1; i < digits.length; i++) {
    const temp = [];
    const digit = digits[i];
    const codes = map[digit];
    for (const str of prev) {
      for (const code of codes) {
        temp.push(str + code);
      }
    }
    prev = temp;
  }
  return prev;
};

const map = {
  2: Array.from("abc"),
  3: Array.from("def"),
  4: Array.from("ghi"),
  5: Array.from("jkl"),
  6: Array.from("mno"),
  7: Array.from("pqrs"),
  8: Array.from("tuv"),
  9: Array.from("wxyz"),
};

var letterCombinations1 = function(digits) {
  const n = digits.length;
  const ans = [];
  if (!n) return ans;
  const recur = (start, output) => {
    if (start === n) {
      ans.push(output);
      return;
    }
    for (const char of map[digits[start]]) {
      recur(start + 1, output + char);
    }
  };
  recur(0, "");
  return ans;
};

// expected output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
const digits = "23";
console.log(letterCombinations(digits));
