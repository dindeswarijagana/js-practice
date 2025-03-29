/*set time out */

// setTimeout((a, b) => {
//   console.log(`sum of ${a} and ${b}:`, a + b);
// }, 5000, 4, 5);

/*set interval */
// const intervalId1 = setInterval(() => {
//   console.log("this runs in every 2 secondss");
// }, 2000);

/* class interval*/
const printStatus = (countDown) => {
  const obj = {
    12: "  |🔴🔴|\n  |🔴🔴|",
    10: "  |🟠🟠|\n  |🟠🟠|",
    8: "  |🟡🟡|\n  |🟡🟡|",
    6: "  |🟢🟢|\n  |🟢🟢|",
    5: "    |   ",
    4: "    |   ",
    3: "    |   ",
    2: "    |   ",
    1: "---------",
  };
  return countDown in obj ? obj[countDown] : "  ------";
};

let countDown = 13;
const intervalId2 = setInterval(() => {
  console.log(printStatus(countDown));
  countDown--;
  if (countDown < 0) {
    clearInterval(intervalId2);
  }
}, 1000);

// const printStatus = (countDown) => {
//   const obj = {
//     10: "Count down starts 🟢",
//     7: "Getting closer 🟡",
//     3: "Almost there! 🟠",
//     1: "Gonna explode! 🔴",
//   };
//   return countDown in obj ? obj[countDown] : "--";
// };

// const intervalId1 = setInterval(() => {
//   console.log("hi");
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId1);
// }, 2000);
