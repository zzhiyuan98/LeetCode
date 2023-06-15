/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const mergeSort = (l1, l2) =>{
  const head = new ListNode(-1);
  let p = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      p.next = l1
      l1 = l1.next;
    }
    else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
  }
  p.next = l1 !== null ? l1 : l2;
  return head.next;
};

const findMiddleNode = head => {
  if (head === null || head.next === null) return head;
  let slow = head;
  let fast = head.next.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const sortList = head => {
  if (head === null || head.next === null) return head;

  const mid = findMiddleNode(head);
  const rightHead = mid.next;
  mid.next = null;

  const left = sortList(head);
  const right = sortList(rightHead);

  return mergeSort(left, right);
};
