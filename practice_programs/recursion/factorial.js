function fact(number) {
  let factorial = number;
  if (factorial <= 1) {
     return 1;
  }
  factorial = factorial * fact(number - 1)
  return factorial;
}

fact(5);