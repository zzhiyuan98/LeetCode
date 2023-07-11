/*
707. 设计链表

你可以选择使用单链表或者双链表，设计并实现自己的链表。

单链表中的节点应该具备两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。

如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。

实现 MyLinkedList 类：

MyLinkedList() 初始化 MyLinkedList 对象。
int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1。
void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将不会插入到链表中。
void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function() {
  this.size = 0;
  this.head = new ListNode(0);
};

/**
 * @param {number} index
 * @return {boolean}
 */
MyLinkedList.prototype.isValid = function(index) {
  return index < this.size;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (!this.isValid(index)) {
    return -1;
  }
  let cur = this.head;
  for (let i = 0; i <= index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) {
    return;
  }
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  const toAdd = new ListNode(val);
  toAdd.next = cur.next;
  cur.next = toAdd;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (!this.isValid(index)) {
    return;
  }
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
*/
