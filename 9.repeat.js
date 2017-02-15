function repeat(str, num) {
  // repeat after me
  var res = '';
  while (num > 0) {
  	res += str;
  	num --;
  }
  return res;
}

repeat('abc', 3);
