import insert from "./57.js";

class RangeList {
  constructor() {
    this.ranges = [];
  }

  add(range) {
    this.ranges = insert(this.ranges, range);
  }

  remove(range) {

  }

  print() {
    console.log(this.ranges);
  }
}

const rl = new RangeList();
rl.add([3, 8]);
rl.print();
