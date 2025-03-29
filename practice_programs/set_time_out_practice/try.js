function f2() {
  console.log("this is f2");
  throw new Error("hello");
}

function f1() {
  console.log("this is f1");
  f2();
}

function main() {
  console.log("this is main");
  f1();
}

console.log(main());
