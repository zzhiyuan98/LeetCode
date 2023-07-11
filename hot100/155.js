/*
155. 最小栈

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
 */

function MinStack() {
  this.stack = [];
  this.minStack = [];
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (this.minStack.length === 0) {
    this.minStack.push(val);
    return;
  }
  const min = this.getMin();
  this.minStack.push(Math.min(val, min));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};

/*
function MinStack() {
  this.stack = [];
  this.min = Infinity;
}

MinStack.prototype.push = function(val) {
  this.min = Math.min(this.min, val);
  this.stack.push(val);
};

MinStack.prototype.pop = function() {
  const number = this.stack.pop();
  if (number === this.min) {
    this.min = Math.min(...this.stack);
  }
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.min;
};

*/
