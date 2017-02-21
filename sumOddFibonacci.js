
function sumFibs(num) {
  var current = 1;
  var prev = 0;
  var temp = 0;
  var sumOdd = 0;
  
  while (current <= num) {
    
    if (current%2 !== 0) {
      sumOdd += current;
    }
    temp = current + prev;
    prev = current;
    current = temp;
    console.log(current);
    
  }
  return sumOdd;
}

sumFibs(75025);
