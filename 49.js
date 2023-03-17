const groupAnagrams = strs => {
  const ans = [];
  const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const a1 = Array.from(str1).sort();
    const a2 = Array.from(str2).sort();
    const sorted1 = a1.join("");
    const sorted2 = a2.join("");
    return sorted1 === sorted2;
  };

  const helper = str => {
    for (const array of ans) {
      const sample = array[0];
      if (isAnagram(sample, str)) {
        array.push(str);
        return true;
      }
    }
    return false;
  };

  for (const str of strs) {
    if (helper(str)) continue;
    ans.push([str]);
  }

  return ans;
};

// expected output: [["bat"],["nat","tan"],["ate","eat","tea"]]
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
