var firstUniqChar = function(s) {
  const seen = new Set();
  const res = new Set();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen.has(char)) {
      res.delete(char);
    }
    else{
      seen.add(char);
      res.add(char);
    }
  }
  return Array.from(res)[0] || " ";
};

const s = "cc";
console.log(firstUniqChar(s));
