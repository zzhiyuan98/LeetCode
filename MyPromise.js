const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 解决异步问题，存放成功和失败的回调
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn(this.value));
      }
    };

    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn(this.reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    } else if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    // PENDING
    else {
      this.onResolvedCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError("The promise and the return value are the same. "));
  }
  if (x instanceof MyPromise) {
    x.then(value => resolvePromise(promise, value, resolve, reject), reject);
  }
  else if ((typeof x === "object" && x !== null) || typeof x === "function") {
    const then = x.then;
    if (typeof then !== "function") {
      resolve(x);
    }
    let called = false;
    const onSuccess = value => {
      if (called) return;
      called = true;
      resolvePromise(promise, value, resolve, reject);
    };
    const onFail = reason => {
      if (called) return;
      called = true;
      reject(reason);
    };
    try {
      // 将 x 作为调用函数 then 的作用域
      then.call(x, onSuccess, onFail);
    }
    catch (e) {
      if (called) return;
      reject(e);
    }
  }
  else {
    resolve(x);
  }
}

MyPromise.prototype.then = (onFulfilled, onRejected) => {
  const onSuccess = typeof onFulfilled === "function" ? onFulfilled : val => val;
  const onFail = typeof onRejected === "function" ? onRejected : reason => {
    throw reason;
  };

  const res = new MyPromise((resolve, reject) => {
    const onResolve = () => {
      try {
        const x = onSuccess(this.value);
        resolvePromise(res, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };
    const onReject = () => {
      try {
        const x = onRejected(this.reason);
        resolvePromise(res, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    };

    if (this.status === FULFILLED) {
      setTimeout(onResolve, 0);
    }
    else if (this.status === REJECTED) {
      setTimeout(onReject, 0);
    }
    else {
      this.onResolvedCallbacks.push(() => {
        setTimeout(onResolve, 0);
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(onReject, 0);
      });
    }
    return res;
  });

  if (this.status === FULFILLED) {
    onSuccess(this.value);
  }
  else if (this.status === REJECTED) {
    onFail(this.reason);
  }
  else if (this.status === PENDING) {
    this.onResolvedCallbacks.push(onSuccess);
    this.onRejectedCallbacks.push(onFail);
  }
};

function all(promises) {
  return new Promise( (resolve, reject) => {
    const n = promises.length;
    const result = [];
    if (n === 0) {
      return new Promise.resolve(result);
    }

    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        result[index] = value;
        count++;
        if (count === n) {
          resolve(result);
        }
      }).catch(e => {
        reject(e);
      });
    });
  });
}

function race(promises) {
  return new Promise((resolve,reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(value => {
        resolve(value);
      }).catch(e => {
        reject(e);
      });

    });
  });
}
