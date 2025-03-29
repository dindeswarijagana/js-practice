function* generator() {
  let i = 0;
  while (i < 5) {
    yield 1;
    yield 2;
    yield 3;

    i++;
  }
}

const gen = generator();
