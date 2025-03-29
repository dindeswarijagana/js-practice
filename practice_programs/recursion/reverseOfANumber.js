function getReverse(num, reverseNumber) {
  if (num > 0) {
    let rem = num % 10;
    return getReverse((num - rem) / 10, (reverseNumber * 10) + rem)
  }

  return reverseNumber;
}

function reverseOfANumber(number) {
  return getReverse(number, 0);
}