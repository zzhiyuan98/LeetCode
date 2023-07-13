/*
142. 环形链表 II

给定一个链表的头节点 head，返回链表开始入环的第一个节点。如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改链表。
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 哈希表 O(N) O(N)
const detectCycle = head => {
  const set = new Set();
  let curr = head;
  while (curr) {
    if (set.has(curr)) {
      return curr;
    }
    set.add(curr);
    curr = curr.next;
  }
  return null;
};

// 双指针 O(N) O(1)
const detectCycle1 = head => {
  if (!head || !head.next) return null;
  let slow = head.next;
  let fast = head.next.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      fast = head;
      while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
      }
      return fast;
    }
  }
  return null;
};
