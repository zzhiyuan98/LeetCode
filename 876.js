var middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
