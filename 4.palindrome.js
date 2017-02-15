
function palindrome(str) {
  // Good luck!
  var re = /[^a-z0-9+]+/gi;
  cleanStr = str.replace(re, '').toLowerCase();
  if (cleanStr === cleanStr.split('').reverse().join('')) {
    return true;
  }
  console.log(cleanStr);
  return false;
}



palindrome("a jan a plan. a canal panama");
