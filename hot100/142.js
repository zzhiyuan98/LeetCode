function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 哈希表 O(N) O(N)
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

// 双指针 O(N) O(1)
const detectCycle1 = head => {
  if (!head || !head.next) return null;
  let slow = head.next;
  let fast = head.next.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      fast = head;
      while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
      }
      return fast;
    }
  }
  return null;
};
