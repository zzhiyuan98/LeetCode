function myNew(fn) {
  const newObj = Object.create(fn.prototype)
  const res = fn.apply(newObj, arguments[1]);
  return typeof res === "object" ? res : newObj;
}
