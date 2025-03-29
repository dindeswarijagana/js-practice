class Counter {
  times = 0;
  constructor() {
    console.log("this is  constructor declaring times");
  }

  increment() {
    return (this.times += 1);
  }
}

const c1 = new Counter();
console.log(c1.increment());
