function apply(context) {
  const self = context === undefined ? window : context;
  const fn = Symbol();
  self[fn] = this;
  const args = arguments[1];
  if (args === undefined) {
    self[fn]();
  } else {
    self[fn](...args);
  }
  delete self[fn];
}

function myCall(context) {
  const self = context === undefined ? window : context;
  const fn = Symbol();
  self[fn] = this;
  const args = Array.prototype.slice.call(arguments, 1);
  if (args === undefined) {
    self[fn]();
  } else {
    self[fn](...args);
  }
  delete self[fn];
}

function myBind(context) {
  const self = context || window;
  const fn = this;
  return function() {
    const args = Array.prototype.slice.call(arguments);
    return fn.apply(self, args);
  }
}

function curryBind(context, ...outerArgs) {
  const self = context || window;
  const fn = this;
  return function(...innerArgs) {
    const args = outerArgs.concat(innerArgs);
    return fn.apply(self, args);
  }
}
