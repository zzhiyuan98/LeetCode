var getKthFromEnd = function(head, k) {
  let slow = head;
  let fast = head;
  for (let i = 1; i <= k; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
