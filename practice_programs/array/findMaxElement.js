function findMax(array, index, max) {
  if(index === array.length) {
    return max;
  }

  const maximum = array[index] > max ? array[index] : max;
  return findMax(array, index + 1, maximum)
}

const max = findMax([1, 2, 3, 4], 0, 0);