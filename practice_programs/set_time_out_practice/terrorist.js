class Stopwatch {
  constructor(time) {
    this.secondsEllapsed = time;
  }

  tick() {
    this.secondsEllapsed++;
    return this.secondsEllapsed;
  }
}

const s = new Stopwatch(0);

const intervalId = setInterval(() => {
  const timer = s.tick();

  console.clear();

  if (timer === 10) {
    console.log("BOOOOOOOM!");
    clearInterval(intervalId);
  }

  console.log("remaining seconds:", timer);
}, 1000);
