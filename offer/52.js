var getIntersectionNode = function(headA, headB) {
  const set = new Set();
  let p1 = headA;
  while (p1) {
    set.add(p1);
    p1 = p1.next;
  }
  let p2 = headB;
  while (p2) {
    if (set.has(p2)) {
      return p2;
    }
    p2 = p2.next;
  }
  return null;
};
