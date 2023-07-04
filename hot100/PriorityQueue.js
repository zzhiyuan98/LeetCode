export default class PriorityQueue {
  constructor(compareFn) {
    this.heap = [];
    this.compareFn = compareFn === undefined ? (a, b) => a > b : compareFn;
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i) {
    return i * 2 + 1;
  }

  getRightChild(i) {
    return i * 2 + 2;
  }

  shiftUp(index) {
    let i = index;
    while (i > 0 && this.compareFn(this.heap[i], this.heap[this.getParent(i)])) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  shiftDown(i) {
    let maxIndex = i;
    const leftChild = this.getLeftChild(i);
    if (leftChild < this.heap.length && this.compareFn(this.heap[leftChild], this.heap[maxIndex])) {
      maxIndex = leftChild;
    }
    const rightChild = this.getRightChild(i);
    if (rightChild < this.heap.length && this.compareFn(this.heap[rightChild], this.heap[maxIndex])) {
      maxIndex = rightChild;
    }
    if (i !== maxIndex) {
      this.swap(i, maxIndex);
      this.shiftDown(maxIndex);
    }
  }

  insert(p) {
    this.heap.push(p);
    this.shiftUp(this.heap.length - 1);
  }

  extractMax() {
    const res = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.shiftDown(0);
    return res;
  }

  getMax() {
    return this.heap[0];
  }
}
