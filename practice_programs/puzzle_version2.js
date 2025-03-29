const halfValue = function(number) {
  return number / 2;
}

const halves = function(array) {
  return array.map(halves);
}

const upperCase = function(string) {
  return string.toUpperCase();
}

const upperCaseString = function(array) {
  return array.map(upperCase);
}

const sqrRt = function(number) {
  return Math.sqrt(number); 
}

const squareRoot = function(array) {
  return array.map(sqrRt);
}

const isOddNum = function(num) {
  return num % 2 === 1;
}

const isOdd = function(array) {
  return array.filter(isOddNum);
}

const isStringLengthGreaterThan5 = function(string) {
  return string.length > 5;
}

const isStringCharMoreThan5 = function(array) {
  return array.filter(isStringLengthGreaterThan5);
}

const largerString = function(string1, string2) {
  return string2.length > string1.length ? string2 : string1;
}

const largestString = function(array) {
  return array.reduce(largerString, "");
}

const  append = function(resultElement, element) {
  return resultElement + element;
}

const concat = function(array) {
  return array.reduce(append, "");
}

const elementsProduct = function(multiplier, multiplicand) {
  return multiplier * multiplicand;
}

const product = function(array) {
  return array.reduce(elementsProduct, 1);
}

const countOdd = function(count, element) {
  return isOddNum(element) ? append(count, 1) : count;
}

const oddCount = function(array) {
  return array.reduce(countOdd, 0);
}

const testPuzzle = function(failed, parameters) {
  const [functionName, array, expected] = parameters;
  console.log(array);
  const actual = functionName(array);
  console.log(actual);

  if (actual !== expected) {
    failed.push([functionName, array, actual, expected]);
  }

 return failed;
}

const testAll = function(array, failed) {
  console.table(array.reduce(testPuzzle, failed));
}

const testCases = [[countOdd, [1, 2, 3, 4], 2], 
[countOdd, [2, 4, 6], 0], [elementsProduct, [1, 2, 1, 3], 6]];
      
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

// console.log(oddCount([1, 4, 9, 3]));
// console.log(product([1, 2, 1, 3]));
// console.log(concat(["ab", "so", "lu", "te"]));
// console.log(largestString(["hi", "avani"]));
// console.log(filter([1,4, 9, 16], isOdd));
// console.log(map([1,4, 9, 16], halves));
// console.log(reduce([1,2, 3, 1], elementsProduct, 1));
// console.log(reduce([1,4, 9, 16], countOdd, 0));
// console.log(reduce(["ab", "so", "lu", 'te'], append, ""));