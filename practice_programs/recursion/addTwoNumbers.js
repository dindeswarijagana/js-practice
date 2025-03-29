function addTwoNumbers(number1, number2) {
  if (number2 === 0) {
    return number1;
  }
  return addTwoNumbers(number1 + 1, number2 - 1);    
}
