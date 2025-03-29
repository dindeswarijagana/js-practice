function getEvenNumbers(from, to, evenNumbersString) {
  if (from > to) {
    return evenNumbersString;
  }
  
  if (from % 2 === 0) {
    evenNumbersString = evenNumbersString + from + " ";
  }
  
  return getEvenNumbers(from + 1, to);
}

function printEvenNumbers(from, to) {
  return getEvenNumbers(from, to, "")
}