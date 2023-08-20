function debounce(fn, delay) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}

function throttle(fn, delay) {
  let busy = false;
  return function(...args) {
    if (busy) return;
    busy = true;
    setTimeout(() => {
      fn(args);
      busy = false;
    }, delay);
  };
}
