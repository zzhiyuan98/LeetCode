import PQ from "./PQ.js";

test("testing min heap", () => {
  const q = new PQ((a, b) => a < b);
  [4, 7, 21, -10, 3, 8].forEach(num => q.insert(num));
  console.log(q.heap);
  expect(q.getMax()).toBe(-10);
  q.extractMax();
  expect(q.getMax()).toBe(3);
  q.extractMax();
  expect(q.getMax()).toBe(4);
});

test("testing min heap", () => {
  const q = new PQ((a, b) => a < b);
  [4, 6, 5, 7].forEach(num => q.insert(num));
  console.log(q.heap);
  expect(q.getMax()).toBe(4);
  q.extractMax();
  expect(q.getMax()).toBe(5);
});
