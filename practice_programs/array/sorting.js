function swapElemnts(array, index) {

}

function sort(array, length, index) {
  for(let index = 0; index < length; index++) {
    if(array[index] > array[index + 1]) {
      swapElemnts(array, index);
    }
  }
}
