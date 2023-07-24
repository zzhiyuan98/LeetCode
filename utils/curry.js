
function curry(fn, ...initialArgs) {
  return function() {
    const args = [...initialArgs, ...arguments];
    if (args.length < fn.length) {
      return curry(fn, ...args);
    }
    return fn.apply(this, args);
  }
}

const add = curry((a, b) => {
  return a + b
});

console.log(add(2)(7));