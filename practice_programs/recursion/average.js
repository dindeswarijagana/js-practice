function getAverage(number1, number2) {
  if (number2 <= number1) {
    return number1;
  }

  return getAverage(number1 + 0.5, number2 - 0.5);
}

function averageOfTwoNumbers(number1, number2) {
 if (number1 < number2) {
  return getAverage(number1, number2);
 }

 return getAverage(number2, number1);
}

console.log(averageOfTwoNumbers(4,6));