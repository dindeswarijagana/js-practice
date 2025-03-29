const Increment = class {
  constructor() {
    this.times = 0;
  }

  increment() {
    if (this.times === 5) {
      return 0;
    }
    console.log(this.times);
    this.times += 1;
    return this.increment();
  }
};

const c1 = new Increment();
console.log(c1.increment());

console.log(Increment);
Increment = 5;
console.log(Increment);
