const thirdFn = (n) => {
  console.log(`thirdFn:i got number ${n}`);
  if (n % 2 === 0) {
    try {
      throw "even number got";
    } catch {
      console.log(`error caught`);
    }
  }
  return n;
};

const secondFn = (n) => {
  console.log(`secondFn:i got number ${n}`);
  return thirdFn(n);
};

const firstFn = (n) => {
  console.log(`firstFn:i got number ${n}`);
  return secondFn(n);
};

const main = () => {
  return firstFn(1);
};

console.log(main());
