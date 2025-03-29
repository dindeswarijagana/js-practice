const numbers = [8, 6, 7, 10, 1, 3, 2, 4];
//ordering numbers
numbers.sort(function (a, b) {
  console.log(a, b);
  if (a < b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
  if (a > b) {
    return 1;
  }
})

// ordering numbers in words
const numbersInWords = ["seven", "one", "two", "three"];
numbers.sort(function (a, b) {
  return a.length - b.length;
})

// descending order
const nums = [6, 8, 3, 1];

nums.sort(function (a, b) {
  console.log(a, b)
  return b - a;
})

// exchanging words
const names = ["avani", "mouni", "harsha", "sai"];

names.sort(function () {
  return Math.random() - 0.5;
})

// sorting nested array
const nestedArray = [[10, 4], [1, 2, 3], [5, 1]];

nestedArray.map(function (arr) {
  return arr.sort(function (a, b) {
    return a - b;
  })
});

// jumbling a word
const word = "memory";

word.split("").sort(function () {
  return Math.random() - 0.5;
}).join("");

// ordering numbers based on odd or even
const numss = [1, 4, 3, 6, 2];

numss.sort(function (a, b) {
  console.log(a, b)
  if (a % 2 === b % 2) {
    return a - b;
  }

  return a % 2 === 0 ? -1 : 1;
});

// ordering numbers based on whether the num greater than 5 or not
numbers.sort(function (a) {
  if (a > 5) {
    return -1;
  }

  return 1;
});