function logarithm (number) {
  if (number <  10) {
    return 0;
  }

  return logarithm(number / 10) + 1;
} 