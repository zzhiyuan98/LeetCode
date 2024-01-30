/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  let h = 0;
  while (i < citations.length && citations[i] > h) {
    i++;
    h++;
  }
  return h;
};

console.log(hIndex([1,3,1]));
