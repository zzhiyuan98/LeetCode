function ListNode(val) {
  this.val = val;
  this.next = null;
}

const detectCycle = head => {
  const set = new Set();
  let curr = head;
  while (curr) {
    if (set.has(curr)) return curr;
    else set.add(curr);
    curr = curr.next;
  }
  return null;
};
