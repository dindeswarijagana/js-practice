function fibonacci(nthTerm) {
  if (nthTerm === 1) {
    return 0;
  }

  if (nthTerm === 2) {
    return 1;
  }
  
  return (fibonacci(nthTerm - 1) + fibonacci(nthTerm - 2));
}