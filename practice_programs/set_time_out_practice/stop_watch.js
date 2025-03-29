class Stopwatch {
  constructor(time) {
    this.secondsEllapsed = time;
  }

  tick() {
    this.secondsEllapsed++;
    return this.secondsEllapsed;
  }

  display() {
    console.log(this.secondsEllapsed);
  }
}

const s = new Stopwatch(0);

setInterval(() => {
  s.tick();
  console.clear();
  s.display();
}, 1000);
