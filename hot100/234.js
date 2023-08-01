/*
234. 回文链表

给你一个单链表的头节点 head，请你判断该链表是否为回文链表。如果是，返回 true；否则，返回 false。
 */

var isPalindrome = function(head) {
  const values = [];
  let p = head;
  while (p) {
    values.push(p.val);
    p = p.next;
  }
  const n = values.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    if (values[left] !== values[right]) return false;
    left++;
    right--;
  }
  return true;
};
