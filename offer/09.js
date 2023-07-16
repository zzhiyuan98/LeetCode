const CQueue = function() {
  this.s1 = [];
  this.s2 = [];
};

CQueue.prototype.appendTail = function(value) {
  this.s1.push(value);
};

CQueue.prototype.deleteHead = function() {
  if (this.s2.length) {
    return this.s2.pop();
  }
  if (!this.s1.length) {
    return -1;
  }
  while (this.s1.length) {
    this.s2.push(this.s1.pop());
  }
  return this.s2.pop();
};
