export default class PQ {
  constructor(compareFn) {
    this.heap = [];
    this.size = 0;
    // initialize to max heap by default
    this.compareFn = compareFn instanceof Function ? compareFn : (a, b) => a > b;
  }

  getLeftChild(i) {
    return 2 * i + 1;
  }

  getRightChild(i) {
    return 2 * i + 2;
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(e) {
    this.heap.push(e);
    this.size++;
    this.shiftUp(this.size - 1);
  }

  shiftUp(i) {
    const parent = this.getParent(i);
    if (this.compareFn(this.heap[i], this.heap[parent])) {
      this.swap(i, parent);
      this.shiftUp(parent);
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  getMax() {
    return this.heap[0];
  }

  shiftDown(i) {
    const leftChild = this.getLeftChild(i);
    const rightChild = this.getLeftChild(i);
    let maxIndex = i;
    if (this.compareFn(this.heap[leftChild], this.heap[i])) {
      maxIndex = leftChild;
    }
    if (this.compareFn(this.heap[rightChild], this.heap[i])) {
      maxIndex = rightChild;
    }
    if (maxIndex === i) {
      return;
    }
    this.swap(i, maxIndex);
    this.shiftDown(maxIndex);
  }

  extractMax() {
    this.swap(0, this.size - 1);
    const max = this.heap.pop();
    this.size--;
    this.shiftDown(0);
    return max;
  }
}
