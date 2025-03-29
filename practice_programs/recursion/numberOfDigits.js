function getDigitCount(num, reverseNumber) {
  if (num > 0) {
    let rem = num % 10;
    return getDigitCount((num - rem) / 10, (reverseNumber * 10) + rem) + 1;
  }

  return 0;
}

function numberOfDigits(number) {
  return getDigitCount(number, 0);
}