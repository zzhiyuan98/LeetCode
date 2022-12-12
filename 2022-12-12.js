/* 1781. 所有子字符串美丽值之和 */

const beautySum =  s => {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const cnt = new Map();
    for (let j = i; j < s.length; j++) {
      cnt.set(s[j], (cnt.get(s[j]) || 0) + 1);
      const array = Array.from(cnt.values());
      sum += Math.max(...array) - Math.min(...array);
    }
  }
  return sum;
};

console.log(beautySum("hqyadervmdrmdphdvaxumxqyfxpbcgdsoaldxjmgjwgoazyvbyghwcaoftqdezlkdjhmiqxyydzzfxxxzyamapuxvinmyhrlzxcdasvytkvgxxgpgrqrjntwlqjxd"));
