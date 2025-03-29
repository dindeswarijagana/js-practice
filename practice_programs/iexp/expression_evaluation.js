import { add, sub } from "./my_maths.js";

const addition = (numbers) => numbers.reduce(add);

const subtraction = (numbers) => numbers.reduce(sub);

console.log(addition([1, 2, 3, 4]));
console.log(subtraction([11, 2, 3, 4]));
