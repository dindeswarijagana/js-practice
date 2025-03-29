function sumOfNNaturalNumbers(number) {
  if (number <= 1) {
    return number;
  }

  return number + sumOfNNaturalNumbers(number -1);
}