/*
160. 相交链表

给你两个单链表的头节点 headA 和 headB，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

题目数据保证整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构。
 */

const getIntersectionNode = (headA, headB) => {
  if (headA === null || headB === null) return null;
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};
