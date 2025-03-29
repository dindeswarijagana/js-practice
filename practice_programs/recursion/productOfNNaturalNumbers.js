function productOfNNaturalNumbers(number) {
  if (number <= 1) {
    return number;
  }

  return number * productOfNNaturalNumbers(number -1);
}