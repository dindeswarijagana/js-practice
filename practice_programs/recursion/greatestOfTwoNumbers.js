function greatestOfTwoNumbers(a, b, c) {
  if (b > a) {
    return greatestOfTwoNumbers(b, a, c);
  }

  if (b > c) {
    return b;
  }

  return greatestOfTwoNumbers(a, c, b);
}