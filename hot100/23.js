/*
23. 合并 K 个升序链表

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const mergeKLists = lists => {
  const k = lists.length;
  const dummyHead = new ListNode(-1);
  let cur = dummyHead;
  while (true) {
    let minNode = null;
    let minIndex = -1;
    for (let i = 0; i < k; i++) {
      if (lists[i] === null) continue;
      if (minNode === null || lists[i].val < minNode.val) {
        minNode = lists[i];
        minIndex = i;
      }
    }
    if (minIndex === -1) break;
    cur.next = minNode;
    cur = cur.next;
    lists[minIndex] = lists[minIndex].next;
  }
  return dummyHead.next;
};

// expected output: [1,1,2,3,4,4,5,6]
const lists = [[1,4,5],[1,3,4],[2,6]];
