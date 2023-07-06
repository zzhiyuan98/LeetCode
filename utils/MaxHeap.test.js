import MaxHeap from "./MaxHeap.js";

let q;

beforeEach(() => {
  q = new MaxHeap();
});

test("test getting maximum", () => {
  [3, -5, 14, 7, 9, 11].forEach(num => q.insert(num));
  expect(q.getMax()).toBe(14);
});

test("test extracting maximum", () => {
  [3, -5, 14, 7, 9, 11].forEach(num => q.insert(num));
  q.extractMax();
  expect(q.getMax()).toBe(11);
  q.extractMax();
  expect(q.getMax()).toBe(9);
  q.extractMax();
  expect(q.getMax()).toBe(7);
});
