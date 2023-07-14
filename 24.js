/*
24. 两两交换链表中的节点

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const swapPairs = function(head) {
  if (!head || !head.next) {
    return head;
  }
  const rest = swapPairs(head.next.next);
  const next = head.next;
  next.next = head;
  head.next = rest;
  return next;
};
