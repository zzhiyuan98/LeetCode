const map = new Map();

function deepClone(target) {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  if (map.has(target)) return map.get(target);
  const res = Array.isArray(target) ? [] : {};
  map.set(target, res);
  for (const key in target) {
    res[key] = deepClone(target[key]);
  }
  return res;
}
