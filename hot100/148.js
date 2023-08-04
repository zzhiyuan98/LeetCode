function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const mergeSort = (l1, l2) =>{
  const head = new ListNode(-1);
  let p = head;
  while (l1 && l2) {
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
  p.next = l1 || l2;
  return head.next;
};

const findMiddleNode = head => {
  const dummyHead = new ListNode(-1, head);
  let slow = dummyHead;
  let fast = dummyHead;
  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

const sortList = head => {
  if (head === null || head.next === null) return head;
  const mid = findMiddleNode(head);
  const second = sortList(mid.next);
  mid.next = null;
  const first = sortList(head);
  return mergeSort(first, second);
};

function deserialize(data) {
  const dummyHead = new ListNode(-1);
  let cur = dummyHead;
  for (const num of data) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  return dummyHead.next;
}

const arr = [-1,5,3,4,0];
const head = deserialize(arr);
console.log(sortList(head));
