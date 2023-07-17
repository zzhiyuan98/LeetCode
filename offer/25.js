var mergeTwoLists = function(l1, l2) {
  const dummyHead = new ListNode(0);
  let curr = dummyHead;
  let p1 = l1;
  let p2 = l2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      curr.next = new ListNode(p1.val);
      p1 = p1.next;
    }
    else {
      curr.next = new ListNode(p2.val);
      p2 = p2.next;
    }
    curr = curr.next;
  }
  curr.next = p1 || p2;
  return dummyHead.next;
};
