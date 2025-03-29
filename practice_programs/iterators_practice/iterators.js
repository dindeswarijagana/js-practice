// let i = 0;
// const obj = {
//   next() {
//     let done = false;

//     if (i > 5) {
//       return { value: undefined, done: true };
//     }
//     return { value: i++, done: done };
//   },
// };

// obj.next();

// const counter = (a, b) => {
//   return {
//     [Symbol.iterator]() {
//       let i = a;
//       return {
//         next() {
//           if (i > b) {
//             return { done: true };
//           }
//           return { value: i++, done: false };
//         },
//       };
//     },
//   };
// };

// const counterObj = counter(1, 5);

// for (let num of counterObj) {
//   console.log(num);
// }
const arr = [3, 4, 5, 6, 7];
const iterator = arr[Symbol.iterator]();
