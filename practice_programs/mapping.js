const isLeapYear = function(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

const leapYears = function(array) {
  return array.map(isLeapYear);
}

const lengthsList = function(string) {
  return string.length;
}

const map = function(array) {
  return array.map(lengthsList);
}
