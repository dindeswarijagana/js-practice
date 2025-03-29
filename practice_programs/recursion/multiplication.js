function getProduct(multiplier, multiplicand) {
  if (multiplicand === 0 || multiplier === 0) {
    return 0;
  }

  return multiplier + getProduct(multiplier, multiplicand - 1);
}