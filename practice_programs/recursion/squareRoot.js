function getSquareRoot(number, candidate) {
  if (candidate * candidate > number) {
    return 0;
  }

  return getSquareRoot(number, candidate + 1) + 1;
}

function squareRoot(number) {
  return getSquareRoot(number, 1);
}