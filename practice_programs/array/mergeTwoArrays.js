function mergeTwoArrays(array1, array2, mergeIndex, index) {
  if(index === array2.length) {
    return array1;
  }
  array1[mergeIndex] = array2[index];
  return mergeTwoArrays(array1, array2, mergeIndex + 1, index + 1);
}

function merge(array1, array2) {
  return mergeTwoArrays(array1, array2, array1.length, 0)
}

merge([1, 5, 6, 4], [2, 3, 7, 8]);