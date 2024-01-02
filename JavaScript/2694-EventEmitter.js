/*
2694. 事件发射器

设计一个 EventEmitter 类。这个接口与 Node.js 或 DOM 的 Event Target 接口相似，但有一些差异。EventEmitter 应该允许订阅事件和触发事件。

你的 EventEmitter 类应该有以下两个方法：

subscribe - 这个方法接收两个参数：一个作为字符串的事件名和一个回调函数。当事件被触发时，这个回调函数将被调用。 一个事件应该能够有多个监听器。当触发带有多个回调函数的事件时，应按照订阅的顺序依次调用每个回调函数。应返回一个结果数组。你可以假设传递给 subscribe 的回调函数都不是引用相同的。 subscribe 方法还应返回一个对象，其中包含一个 unsubscribe 方法，使用户可以取消订阅。当调用 unsubscribe 方法时，回调函数应该从订阅列表中删除，并返回 undefined。
emit - 这个方法接收两个参数：一个作为字符串的事件名和一个可选的参数数组，这些参数将传递给回调函数。如果没有订阅给定事件的回调函数，则返回一个空数组。否则，按照它们被订阅的顺序返回所有回调函数调用的结果数组。
 */

class EventEmitter {
  constructor() {
    this.map = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    const callbacks = this.map.get(eventName) || [];
    this.map.set(eventName, callbacks.concat(callback));
    return {
      unsubscribe: () => {
        const callbacks = this.map.get(eventName) || [];
        this.map.set(eventName, callbacks.filter(e => e !== callback))
      }
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const callbacks = this.map.get(eventName) || [];
    return callbacks.map(callback => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

const emitter = new EventEmitter();
const subs1 = emitter.subscribe("firstEvent", x => x + 1);
const subs2 = emitter.subscribe("firstEvent", x => x + 2);
const subs3 = emitter.subscribe("firstEvent", x => x + 3);
subs2.unsubscribe();
subs3.unsubscribe();
console.log(emitter.emit("firstEvent", [5]));
