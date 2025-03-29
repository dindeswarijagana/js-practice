//method1
// const filterAbove = function(array) {
//   return array.filter(function(number) { return number > threshold;})
// }

//method2 
const filterAbove = function (array) {
  return function (threshold) {
    return array.filter(function (number) { return number > threshold });
  }
}

const numbersInRange = function (array) {
  return function (range) {
    return array.filter(function (number) {
      return number > range[0] && number < range[1]
    });
  }
}

const findIndex = function (array) {
  return function (target) {
    return array.reduceRight(function (init, number, index) {
      return init = number === target ? index : init;
    }, -1);
  }
}

// printing spaces and stars
const space = " ";
const star = "*";

[1, 2, 3, 4].map(function (times) {
  return [space, star].map(function (char) {
    return char.repeat(times);
  })
})

//fruits distribution
const cycle = function (persons, fruits) {
  return function () {
    let index = -1;
    return persons.map(function (person) {
      index++;
      return person + "-" + fruits[index % fruits.length];
    });
  }
}

const countChar = function (element) {
  let count = 0;
  string.map(function (ele) { count += ele === element ? 1 : 0 });
  return element + "-" + count;
}

const removeDuplicates = function (init, char) {
  if (init.includes(char)) {
    return init;
  }

  init.push(char);
  return init;
}

const occurences = function (string) {
  return function () {
    return string.split("").reduce(removeDuplicates, []).map(countChar);
  }
}

const charCount = occurences("avani");