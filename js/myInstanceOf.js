function myInstanceOf(child, parent) {
  if (typeof child !== "object" || child === null) return false;
  let p = Object.getPrototypeOf(child);
  while (p !== null)  {
    if (p === parent.prototype) return true;
    p = Object.getPrototypeOf(p);
  }
  return false;
}
