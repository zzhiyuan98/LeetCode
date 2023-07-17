const reverseList1 = head => {
  if (!head) {
    return null;
  }
  let prev = null;
  let curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

const reverseList = head => {
  if (!head || !head.next) {
    return head;
  }
  const temp = head.next;
  const newHead = reverseList(head.next);
  head.next = null;
  temp.next = head;
  return newHead;
};
