const halves = function (number) {
  return number / 2;
}

const upperCase = function (string) {
  return string.toUpperCase();
}

const sqrRt = function (number) {
  return Math.sqrt(number);
}

const map = function (array, functionName) {
  return array.map(functionName);
}

const isOdd = function (num) {
  return num % 2 === 1;
}

const isStringLengthGreaterThan5 = function (string) {
  return string.length > 5;
}

const filter = function (array, functionName) {
  return array.filter(functionName);
}
// -------------- reduce -----------------------
const largestString = function (string1, string2) {
  return string2.length > string1.length ? string2 : string1;
}

const append = function (resultElement, element) {
  return resultElement + element;
}

const elementsProduct = function (multiplier, multiplicand) {
  return multiplier * multiplicand;
}

const countOdd = function (count, element) {
  return isOdd(element) ? append(count, 1) : count;
}

const reduce = function (array, functionName, init) {
  return array.reduce(functionName, init);//functionname(array);
}

const isArray = function (expected) {
  return Array.isArray(expected);
}

const isPassed = function (actual, expected) {
  if (isArray(expected)) {
    return areEqual(actual, expected);
  }

  if (isNestedArray(expected)) {
    return areNestedArraysEqual(actual, expected);
  }

  return actual === expected;
}

const testPuzzle = function (failed, parameters) {
  const [functionName, array, init, expected] = parameters;
  const actual = reduce(array, functionName, init);

  const passed = isPassed(actual, expected);

  if (actual !== expected) {
    failed.push([functionName, array, actual, expected]);
  }

  return failed;
}

const testAll = function (array, failed) {
  console.table(array.reduce(testPuzzle, failed));
}

const testCases = [
  [countOdd, [1, 2, 3, 4], 0, 2],
  [countOdd, [2, 4, 6], 0, 0],
  [elementsProduct, [1, 3, 5, 7, 9], 1, 5]
];

testAll(testCases, []);































// console.log(sqrRt([1, 4, 9, 16]));
// console.log(elementsProduct([1, 2, 3, 1]));
// console.log(countOdd([1, 2, 3, 1]));
// console.log(append(["ab", "so", "lu", "te"]));
// console.log(largestString(["hi", "hello", "how are", "assignment"]));
// console.log(stringsGreaterThanFiveChars(["hi", "hello", "how are", "assignment"]));
// console.log(isOdd([1, 2, 3, 1]));
// console.log(halves([10, 20, 31]));
// console.log(upperCase(["harsha", "avani", "gundu"]));

// console.log(map([1,4, 9, 16], sqrRt));
// console.log(filter([1,4, 9, 16], isOdd));
// console.log(map([1,4, 9, 16], halves));
// console.log(reduce([1,2, 3, 1], elementsProduct, 1));
// console.log(reduce([1,4, 9, 16], countOdd, 0));
// console.log(reduce(["ab", "so", "lu", 'te'], append, ""));