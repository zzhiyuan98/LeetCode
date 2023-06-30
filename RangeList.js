import insert from "./57.js";
import removeInterval from "./1272.js";

class RangeList {
  constructor() {
    this.ranges = [];
  }

  add(range) {
    this.ranges = insert(this.ranges, range);
  }

  remove(range) {
    this.ranges = removeInterval(this.ranges, range);
  }

  print() {
    const interval2str = interval => {
      const [start, end] = interval;
      return `[${start}, ${end})`;
    };
    console.log(this.ranges.map(interval2str).join(" "));
  }
}

const rl = new RangeList();
rl.add([1, 5]);
rl.add([10, 21]);
rl.add([3, 8]);
rl.print();
rl.remove([10, 10]);
rl.print();
rl.remove([10, 11]);
rl.print();
rl.remove([15, 17]);
rl.print();
rl.remove([3, 19]);
rl.print();
