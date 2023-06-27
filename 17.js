/*
2: abc
3: def
4: ghi
5: jkl
6: mno
7: pqrs
8: tuv
9: wxzy
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

// expected output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
const digits = "23";
console.log(letterCombinations(digits));
