function getReverseString(string, reverseString, end) {
  if (end < 0) {
    return "";
  }
  return string[end] + getReverseString(string, reverseString, end - 1)
}

function reverseOfAString(string) {
  return getReverseString(string, "", string.length -1);
}