function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
  if (!head) {
    return null;
  }
  const dummyHead = new Node(0);
  const map = new Map();
  let p1 = head;
  let p2 = dummyHead;
  while (p1) {
    p2.next = new Node(p1.val);
    p2 = p2.next;
    map.set(p1, p2);
    p1 = p1.next;
  }
  p2.next = null;
  p1 = head;
  p2 = dummyHead.next;
  while (p1) {
    p2.random = map.get(p1.random);
    p1 = p1.next;
    p2 = p2.next;
  }
  return dummyHead.next;
};
