const STAR = "*";

const range = function (from, length, step) {
  const array = [];
  for (let index = from; index <= length; index += step) {
    array.push(index);
  }

  return array;
}

const repeat = function (times) {
  return STAR.repeat(times);
}

const padStart = function (element, index, array) {
  return element.padStart(array.length);
}

const rightAlignedTriangle = function (size) {
  return leftAlignedTriangle(size).map(array);
}

const leftAlignedTriangle = function (size) {
  return range(1, size, 1).map(repeat).join("\n");
}

const rectangle = function (dimensions) {
  const x = function () {
    return dimensions[0];
  };

  return range(1, dimensions[1], 1).map(x).map(repeat).join("\n");
};

// console.log(rectangle([4, 3]));
// console.log(triangle([4]));
// console.log(triangle([1]));
// console.log(triangle([1]));

// console.log(rightAlignedTriangle(5),"\n");
// console.log(leftAlignedTriangle(5), "\n");
// console.log(rightAlignedTriangle(3), "\n");