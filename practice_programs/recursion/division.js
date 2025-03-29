function getQuotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return getQuotient(dividend - divisor, divisor) + 1;
}