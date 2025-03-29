console.log("Setting timeout...");
setTimeout(() => {
  console.log("Timeout executed!");
}, 1000);

console.log("Setting interval...");
const intervalID = setInterval(() => {
  console.log("Interval executed!");
}, 2000);

setTimeout(() => {
  console.log("Clearing interval...");
  clearInterval(intervalID);
}, 5000);
