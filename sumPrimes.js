
function sumPrimes(num) {
  var primes = [];
  var sumPrime = 0;
  
  if (num < 2) {
    return 0;
  }
  
  primes.push(2);
  for (var i = 3; i <= num; i+=2) {
     if (isPrime(i)) {
       primes.push(i);
     }
  }
  
  sumPrime = primes.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  
  return sumPrime;
}

function isPrime(n) {
  
  /*
    Tests if a number is prime
    returns a boolean
  */
  
  if (n < 2) {
    return false;
  }
  
  for (var i = 2; i < n; i++) {
    if (n%i === 0) {
      return false;
    }
  }
  
  return true;
}

sumPrimes(977);
// isPrime(9);
