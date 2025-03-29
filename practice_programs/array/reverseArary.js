function reverseArray(firstIndex, lastIndex, array) {
  if(lastIndex <= firstIndex) {
    return array;
  }

  const a = array[firstIndex];
  array[firstIndex] = array[lastIndex];
  array[lastIndex] = a;

  return reverseArray(firstIndex + 1, lastIndex - 1, array);
}

const array = [1, 2, 3, 4];
reverseArray(0, array.length - 1, array);
