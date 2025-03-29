class Stopwatch {
  constructor() {
    this.secondsEllapsed = 0;
  }

  tick() {
    this.secondsEllapsed++;
  }

  display() {
    const seconds = this.secondsEllapsed % 60;
    const minutes = Math.floor(this.secondsEllapsed / 60);
    const hours = Math.floor(this.secondsEllapsed / (60 * 60));

    console.log(`${hours}:${minutes}:${seconds}`);
  }
}

const s = new Stopwatch();

setInterval(() => {
  s.tick();
  console.clear();
  s.display();
}, 1000);
