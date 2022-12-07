/* 1805. 字符串中不同整数的数目 */

const getString = str => {
  if (!str.startsWith("0")) return str;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") return str.slice(i);
  }
};

const numDifferentIntegers = word => {
  const array = word.split(/[a-z]+/).filter(str => str !== "");
  console.log(array);
  const set = new Set();
  array.forEach(str => set.add(getString(str) || "0"));
  return set.size;
};
