function curry(fn, ...outerArgs) {
  return function(...innerArgs) {
    const args = outerArgs.concat(innerArgs);
    if (args.length < fn.length) {
      return curry(fn, ...args);
    }
    return fn.apply(this, args);
  }
}
