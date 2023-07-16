const reversePrint = head => {
  let ans = [];
  const recur = node => {
    if (!node) {
      return;
    }
    recur(node.next);
    ans.push(node.val);
  };
  recur(head);
  return ans;
};
