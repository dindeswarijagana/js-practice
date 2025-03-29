// console.log("Start");

// let promise = new Promise((resolve, reject) => {
//   console.log("Inside Promise");
//   resolve("Promise Resolved");
// });

// promise.then((result) => {
//   console.log(result);
//   return "completed";
// });

// console.log("End");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("it will excecute after 2 seconds");
//   }, 10000);
//   resolve(1);
// });

const add = (a, b) => a + b;

const executor = (resolve, reject) => {
  setTimeout(() => {
    console.log("inside exutor ");
    const c = add(2, 4);
    resolve(2);
  }, 10000);
};
const promise = new Promise(executor);

const display = (resoledValue) => {
  console.log(resoledValue);
  return "modified value";
};

const afterThen = promise.then(display);
console.log(afterThen);
