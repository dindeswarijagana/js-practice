function getDigitsSum(num, reverseNum) {
  if (num < 1) {
    return 0;
  }
  
  let rem = num % 10;
  return getDigitsSum((num - rem) / 10, (reverseNum * 10) + rem) + rem;
}

function sumOfDigits(number) {
  return getDigitsSum(number, 0);
}