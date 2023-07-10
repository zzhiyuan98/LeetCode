import calServers from "./tasks.js";

test("test getting the number of servers required", () => {
  const tasks = [[2,3,1],[6,9,2],[0,5,1]];
  expect(calServers(tasks)).toBe(2);
});

test("test getting the number of servers required", () => {
  const tasks = [[3,9,2],[4,7,3]];
  expect(calServers(tasks)).toBe(5);
});
