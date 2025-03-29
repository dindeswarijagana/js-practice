const range = function (from, length, step) {
  const array = [];
  for (let index = from; index <= length; index += step) {
    array.push(index);
  }
  return array;
}

const reducer = function (init, element) {
  init.unshift(element);
  return init;
}

const reversedArray = function (array, init) {
  return array.reduce(reducer, init);
}

const reversedString = function (string, init) {
  return string.split("").reduce(reducer, init).join("");
}

const reducer1 = function (init, element) {
  if (element > init[0]) {
    init[1] = init[0];
    init[0] = element;
  }

  init[1] = element < init[0] && element > init[1] ? element : init[1];

  return init;
}

const secondGreatest = function (array, init) {
  return array.reduce(reducer1, init)[1];
}

const reducer2 = function (init) {
  [init[1], init[0]] = init[0], init[0] + init[1]; 
  return init;
}

const fibonacci = function (array, init) {
  return range(1, array[0], 1).reduce(reducer2, init)[0];
}