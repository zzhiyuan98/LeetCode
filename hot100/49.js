/*
49. 字母异位词分组

给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 */

const groupAnagrams = strs => {
  const map = new Map();
  for (const str of strs) {
    const key = Array.from(str).sort().toString();
    const list = map.has(key) ? map.get(key) : [];
    map.set(key, list.concat(str));
  }
  return [...map.values()];
};

var groupAnagrams1 = function(strs) {
  const map = new Map();
  strs.forEach(str => {
    const sorted = str.split("").sort().join("");
    if (map.has(sorted)) {
      map.set(sorted, map.get(sorted).concat(str));
    } else {
      map.set(sorted, [str]);
    }
  });
  return Array.from(map.values());
};

// expected output: [["bat"],["nat","tan"],["ate","eat","tea"]]
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
