class MaxHeap {
  constructor() {
    this.heap = [];
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

  getMax() {
    return this.heap[0];
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  shiftUp(i) {
    if (i <= 0) {
      return;
    }
    const parent = this.getParent(i);
    if (this.heap[i] > this.heap[parent]) {
      this.swap(i, parent);
      this.shiftUp(parent);
    }
  }

  shiftDown(i) {
    let maxIndex = i;
    const left = this.getLeftChild(i);
    const right = this.getRightChild(i);
    const n = this.getSize();
    if (left < n && this.heap[maxIndex] < this.heap[left]) {
      maxIndex = left;
    }
    if (right < n && this.heap[maxIndex] < this.heap[right]) {
      maxIndex = right;
    }
    if (maxIndex === i) {
      return;
    }
    this.swap(i, maxIndex);
    this.shiftDown(maxIndex);
  }

  getSize() {
    return this.heap.length;
  }

  removeMax() {
    const res = this.getMax();
    this.swap(0, this.getSize() - 1);
    this.heap.pop();
    this.shiftDown(0);
    return res;
  }

  insert(val) {
    this.heap.push(val);
    const n = this.getSize();
    this.shiftUp(n - 1);
  }
}

var getLeastNumbers = function(arr, k) {
  const maxHeap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (i < k) {
      maxHeap.insert(num);
    }
    else if (num < maxHeap.getMax()) {
      maxHeap.removeMax();
      maxHeap.insert(num);
    }
  }
  const ans = [];
  for (let i = 1; i <= k; i++) {
    ans.push(maxHeap.removeMax());
  }
  return ans;
};

const arr = [0,1,2,1];
const k = 1;
console.log(getLeastNumbers(arr, k));
