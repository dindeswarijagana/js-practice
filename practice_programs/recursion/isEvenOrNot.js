function isEven(number) {
   if (number >= 2) {
     return isEven(number - 2);
   }
   return number === 0;
}

console.log(isEven(9));
console.log(isEven(2));
console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(16));
console.log(isEven(3));
console.log(isEven(21));